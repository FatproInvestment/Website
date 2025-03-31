import React, { ReactNode } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import useBaseUrl from '@docusaurus/useBaseUrl';
import { useColorMode } from '@docusaurus/theme-common';
import Translate, { translate } from '@docusaurus/Translate';
import Heading from '@theme/Heading';
import siteConfig from '@site/src/config/siteConfig';

import styles from './index.module.css';

// SVG Icon Components
function TwitterIcon() {
  return (
    <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 002.46-2.548l-.047-.02z" />
    </svg>
  );
}

function SubstackIcon() {
  return (
    <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
      <path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z" />
    </svg>
  );
}

function HomepageHeader() {
  const { siteConfig: docSiteConfig, i18n } = useDocusaurusContext();
  const currentLocale = i18n.currentLocale === 'zh-CN' ? 'zh-CN' : 'en';
  
  // Get social media config for current language
  const twitterConfig = siteConfig.social.twitter[currentLocale];
  const substackConfig = siteConfig.social.substack[currentLocale];
  
  return (
    <div>
      <header className="hero-banner">
        <div className="container">
          <Heading as="h1" className="hero__title">
            <Translate>FatBro Investment</Translate>
          </Heading>
          <p className="hero__subtitle">
            <Translate>{docSiteConfig.tagline}</Translate>
          </p>
          <div className={styles.buttons}>
            <a href={twitterConfig.url} className="hero-social-button" target="_blank" rel="noopener noreferrer">
              <TwitterIcon /> Follow Twitter
            </a>
            <a href={substackConfig.url} className="hero-social-button" target="_blank" rel="noopener noreferrer">
              <SubstackIcon /> Subscribe Blog
            </a>
          </div>
        </div>
      </header>
    </div>
  );
}

// Left Sidebar - Investment Opportunities and Article List
function LeftSidebar() {
  const { i18n } = useDocusaurusContext();
  const currentLocale = i18n.currentLocale === 'zh-CN' ? 'zh-CN' : 'en';
  const [isRssLoaded, setIsRssLoaded] = React.useState(false);
  
  // Load RSS script when component mounts
  React.useEffect(() => {
    // Check if script already exists
    const existingScript = document.querySelector('script[src="https://widget.rss.app/v1/list.js"]');
    
    if (!existingScript) {
      const script = document.createElement('script');
      script.src = 'https://widget.rss.app/v1/list.js';
      script.async = true;
      script.onload = () => {
        setIsRssLoaded(true);
        // Ensure iframe height adapts to content
        setTimeout(() => {
          const iframes = document.querySelectorAll('.articles-container iframe');
          iframes.forEach(iframe => {
            if (iframe instanceof HTMLIFrameElement) {
              iframe.style.height = '100%';
              iframe.style.minHeight = '600px';
            }
          });
        }, 1000);
      };
      document.body.appendChild(script);
      
      return () => {
        setIsRssLoaded(false);
      };
    } else {
      // If script already exists, still set loading as complete
      setIsRssLoaded(true);
      // Ensure iframe height adapts to content
      setTimeout(() => {
        const iframes = document.querySelectorAll('.articles-container iframe');
        iframes.forEach(iframe => {
          if (iframe instanceof HTMLIFrameElement) {
            iframe.style.height = '100%';
            iframe.style.minHeight = '600px';
          }
        });
      }, 1000);
    }
  }, []);
  
  return (
    <div className="left-sidebar">
      <Heading as="h2" className="margin-bottom--md">
        Hot Alpha
      </Heading>
      <div className="articles-container">
        {!isRssLoaded && (
          <div className="loading-container" style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center',
            justifyContent: 'center', 
            height: '400px',
            backgroundColor: 'var(--ifm-background-surface-color)',
            borderRadius: '8px',
            padding: '2rem',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)'
          }}>
            <div className="loading-spinner"></div>
            <p style={{
              marginTop: '1rem',
              fontSize: '1rem',
              fontWeight: '500',
              color: 'var(--ifm-color-primary)'
            }}>Loading Hot Alpha...</p>
          </div>
        )}
        <div className="rss-content-wrapper" style={{
          visibility: isRssLoaded ? 'visible' : 'hidden',
          flex: 1,
          overflow: 'auto',
          height: '100%'
        }}>
          {currentLocale === 'zh-CN' ? (
            <div 
              dangerouslySetInnerHTML={{ 
                __html: '<rssapp-list id="NxYJt3E4ark0OgIS"></rssapp-list>' 
              }} 
            />
          ) : (
            <div 
              dangerouslySetInnerHTML={{ 
                __html: '<rssapp-list id="rxsOFu3SaIMK0Uh9"></rssapp-list>' 
              }} 
            />
          )}
        </div>
      </div>
    </div>
  );
}

// Main Content Area - Article List
function MainContent() {
  const { i18n } = useDocusaurusContext();
  const currentLocale = i18n.currentLocale === 'zh-CN' ? 'zh-CN' : 'en';
  const [isLoaded, setIsLoaded] = React.useState(false);
  
  // Load RSS script after component mounts
  React.useEffect(() => {
    // Check if script already exists
    const existingScript = document.querySelector('script[src="https://widget.rss.app/v1/list.js"]');
    
    if (!existingScript) {
      const script = document.createElement('script');
      script.src = 'https://widget.rss.app/v1/list.js';
      script.async = true;
      script.onload = () => {
        setIsLoaded(true);
        // Ensure iframe height adapts to content
        setTimeout(() => {
          const iframes = document.querySelectorAll('.main-content-articles iframe');
          iframes.forEach(iframe => {
            if (iframe instanceof HTMLIFrameElement) {
              iframe.style.height = '100%';
              iframe.style.minHeight = '600px';
            }
          });
        }, 1000);
      };
      document.body.appendChild(script);
      
      return () => {
        // Don't remove the script on unmount as it might cause issues with other components
        // But we track the loading state
        setIsLoaded(false);
      };
    } else {
      // If script already exists, still set loading to true
      setIsLoaded(true);
      // Ensure iframe height adapts to content
      setTimeout(() => {
        const iframes = document.querySelectorAll('.main-content-articles iframe');
        iframes.forEach(iframe => {
          if (iframe instanceof HTMLIFrameElement) {
            iframe.style.height = '100%';
            iframe.style.minHeight = '600px';
          }
        });
      }, 1000);
    }
  }, []);
  
  return (
    <div className="main-content">
      <div className="main-content-header">
        <Heading as="h2" className="margin-bottom--md">
          Featured Articles
        </Heading>
      </div>
      <div className="main-content-articles">
        {!isLoaded && (
          <div className="loading-container">
            <div className="loading-spinner"></div>
            <p style={{
              marginTop: '1rem',
              fontSize: '1.2rem',
              fontWeight: '600',
              color: 'var(--ifm-color-primary)'
            }}>Loading Featured Articles...</p>
            <p style={{
              fontSize: '0.9rem',
              color: 'var(--ifm-color-secondary-darkest)',
              textAlign: 'center',
              maxWidth: '300px',
              margin: '0.5rem auto 0'
            }}>We're fetching the latest investment insights and analysis</p>
          </div>
        )}
        <div className="rss-main-wrapper" style={{ 
          visibility: isLoaded ? 'visible' : 'hidden',
          height: '100%',
          overflow: 'auto'
        }}>
          {currentLocale === 'zh-CN' ? (
            <div 
              dangerouslySetInnerHTML={{ 
                __html: '<rssapp-list id="XKJRd4kZf1rVu6Vv"></rssapp-list>' 
              }} 
            />
          ) : (
            <div 
              dangerouslySetInnerHTML={{ 
                __html: '<rssapp-list id="hnibJgZoiuntzqre"></rssapp-list>' 
              }} 
            />
          )}
        </div>
      </div>
    </div>
  );
}

// Right Sidebar - Tool Links
function RightSidebar() {
  const { i18n } = useDocusaurusContext();
  const currentLocale = i18n.currentLocale === 'zh-CN' ? 'zh-CN' : 'en';
  
  // Get tool data from config file
  const tools = siteConfig.tools.map(tool => ({
    id: tool.id,
    name: tool.name[currentLocale],
    description: tool.description[currentLocale],
    icon: tool.icon,
    url: tool.url[currentLocale],
  }));
  
  return (
    <div className="right-sidebar">
      <Heading as="h2" className="margin-bottom--md">
        Tools
      </Heading>
      <div className="tools-grid">
        {tools.map(tool => (
          <a key={tool.id} href={tool.url} className="tool-link" target="_blank" rel="noopener noreferrer">
            <img src={useBaseUrl(tool.icon)} alt={tool.name} />
            <div className="tool-link-content">
              <Heading as="h4">{tool.name}</Heading>
              <p>{tool.description}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default function Home(): ReactNode {
  const { siteConfig: docSiteConfig, i18n } = useDocusaurusContext();
  const currentLocale = i18n.currentLocale === 'zh-CN' ? 'zh-CN' : 'en';
  
  // Get iframe config from config file
  const iframeConfigs = siteConfig.iframes.map(iframe => ({
    id: iframe.id,
    width: iframe.width,
    url: iframe.url,
    height: iframe.height,
    title: iframe.title[currentLocale],
  }));
  
  return (
    <Layout
      title={docSiteConfig.title}
      description={translate({
        id: 'homepage.description',
        message: 'FatBro\'s personal investment sharing platform, providing investment articles, tools and opportunities',
      })}>
      <HomepageHeader />
      <main>
        <div className="three-column-layout">
          <LeftSidebar />
          <MainContent />
          <RightSidebar />
        </div>
        
        {/* iframe Section */}
        <div className="iframe-container container">
          
          {/* Render iframes based on config */}
          <div className="iframe-rows">
            {iframeConfigs.map(iframe => (
              <div 
                key={iframe.id} 
                className={iframe.width === '1' ? 'iframe-full' : 'iframe-half'}
              >
                <iframe
                  src={iframe.url}
                  title={iframe.title}
                  width="100%"
                  height={iframe.height}
                  frameBorder="0"
                  allowFullScreen
                />
              </div>
            ))}
          </div>
        </div>
      </main>
    </Layout>
  );
} 