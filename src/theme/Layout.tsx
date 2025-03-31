import React, { useEffect } from 'react';
import Layout from '@theme-original/Layout';
import type LayoutType from '@theme/Layout';
import type {Props} from '@theme/Layout';
import Translate from '@docusaurus/Translate';

// 为Twitter窗口对象添加类型
declare global {
  interface Window {
    twttr?: {
      widgets: {
        load: (target?: HTMLElement) => void;
        createTimeline: (
          id: string,
          element: HTMLElement,
          options?: object
        ) => Promise<HTMLElement>;
      };
      ready: (callback: (twttr: any) => void) => void;
    };
  }
  
  // Brave浏览器检测接口
  interface Navigator {
    brave?: {
      isBrave: () => Promise<boolean>;
    };
  }
}

export default function LayoutWrapper(props: Props): React.ReactElement {
  // 处理RSS小部件滚动问题
  React.useEffect(() => {
    // 处理RSS widget加载完成后的滚动问题
    const handleRssWidgetLoaded = () => {
      // 等待RSS小部件完全加载
      const checkRssWidgets = () => {
        const rssIframes = document.querySelectorAll('iframe[src*="rss.app"]');
        if (rssIframes.length > 0) {
          // 调整所有RSS iframe的滚动行为
          rssIframes.forEach(iframe => {
            if (iframe instanceof HTMLIFrameElement) {
              // 确保iframe可以滚动且高度适应内容
              iframe.style.height = '100%';
              iframe.style.minHeight = '600px';
              
              // 尝试与iframe内部通信（如果同源策略允许）
              try {
                iframe.contentWindow?.postMessage({
                  type: 'rssapp-scroll-fix',
                  height: '100%'
                }, '*');
              } catch (e) {
                console.log('无法与RSS iframe通信：', e);
              }
              
              // 调整父容器的滚动设置
              const parentContainer = iframe.parentElement;
              if (parentContainer) {
                parentContainer.style.overflow = 'auto';
                parentContainer.style.height = '100%';
              }
            }
          });
        } else {
          // 如果还没有找到RSS iframe，继续等待
          setTimeout(checkRssWidgets, 500);
        }
      };
      
      // 开始检查RSS小部件
      setTimeout(checkRssWidgets, 1000);
    };
    
    // 页面加载完成后执行RSS小部件调整
    if (document.readyState === 'complete') {
      handleRssWidgetLoaded();
    } else {
      window.addEventListener('load', handleRssWidgetLoaded);
    }
    
    // 监听窗口大小变化重新调整iframe
    const handleResize = () => {
      const rssIframes = document.querySelectorAll('iframe[src*="rss.app"]');
      rssIframes.forEach(iframe => {
        if (iframe instanceof HTMLIFrameElement) {
          iframe.style.height = '100%';
        }
      });
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('load', handleRssWidgetLoaded);
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  // 处理ResizeObserver错误
  React.useEffect(() => {
    const handleResizeObserverError = () => {
      const resizeObserverError = document.getElementById('webpack-dev-server-client-overlay');
      if (resizeObserverError) {
        resizeObserverError.style.display = 'none';
      }
    };

    // 通过防抖函数处理错误
    let timeoutId: NodeJS.Timeout;
    window.addEventListener('error', (e) => {
      if (e.message === 'ResizeObserver loop completed with undelivered notifications.') {
        e.stopImmediatePropagation();
        if (timeoutId) clearTimeout(timeoutId);
        timeoutId = setTimeout(handleResizeObserverError, 200);
      }
    }, true);

    return () => {
      window.removeEventListener('error', handleResizeObserverError, true);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, []);

  return <Layout {...props} />;
} 