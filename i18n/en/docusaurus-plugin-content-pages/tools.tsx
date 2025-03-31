import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Translate, { translate } from '@docusaurus/Translate';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Heading from '@theme/Heading';
import siteConfig from '@site/src/config/siteConfig';

function ToolsHeader() {
  return (
    <header className="hero hero--primary">
      <div className="container">
        <Heading as="h1" className="hero__title">
          <Translate>投资工具箱</Translate>
        </Heading>
        <p className="hero__subtitle">
          <Translate>精选实用工具，助力你的投资决策</Translate>
        </p>
      </div>
    </header>
  );
}

interface Tool {
  id: number;
  name: string;
  description: string;
  icon: string;
  url: string;
  featured?: boolean;
}

function ToolCard({ tool }: { tool: Tool }) {
  return (
    <div className={`card margin-bottom--lg ${tool.featured ? 'shadow--md' : ''}`}>
      <div className="card__body">
        <div className="avatar">
          <div className="avatar__photo avatar__photo--lg">
            <img src={useBaseUrl(tool.icon)} alt={tool.name} />
          </div>
          <div className="avatar__intro">
            <Heading as="h3" className="avatar__name">
              {tool.name}
            </Heading>
            <p className="avatar__subtitle">{tool.description}</p>
          </div>
        </div>
      </div>
      <div className="card__footer">
        <div className="button-group button-group--block">
          <a className="button button--primary" href={tool.url} target="_blank" rel="noopener noreferrer">
            <Translate>使用工具</Translate>
          </a>
        </div>
      </div>
    </div>
  );
}

export default function Tools() {
  const { siteConfig: docSiteConfig, i18n } = useDocusaurusContext();
  const currentLocale = i18n.currentLocale === 'zh-CN' ? 'zh-CN' : 'en';
  
  // Get tool data from config file
  const configTools = siteConfig.tools.map(tool => ({
    id: tool.id,
    name: tool.name[currentLocale],
    description: tool.description[currentLocale],
    icon: tool.icon,
    url: tool.url[currentLocale],
    featured: tool.featured,
  }));

  // Separate tools into featured and regular
  const featuredTools = configTools.filter(tool => tool.featured);
  const regularTools = configTools.filter(tool => !tool.featured);

  return (
    <Layout
      title={translate({
        id: 'tools.title',
        message: 'Investment Tools | FatBro Investment',
      })}
      description={translate({
        id: 'tools.description',
        message: 'FatBro\'s curated investment toolbox to help you make smarter investment decisions.',
      })}>
      <ToolsHeader />
      <main>
        <div className="container margin-top--lg">
          {featuredTools.length > 0 && (
            <div className="margin-bottom--xl">
              <Heading as="h2" className="margin-bottom--lg text--center">
                <Translate>Featured Tools</Translate>
              </Heading>
              <div className="row">
                {featuredTools.map(tool => (
                  <div key={tool.id} className="col col--4 margin-bottom--lg">
                    <ToolCard tool={tool} />
                  </div>
                ))}
              </div>
            </div>
          )}

          {regularTools.length > 0 && (
            <>
              <Heading as="h2" className="margin-bottom--lg text--center">
                <Translate>Other Tools</Translate>
              </Heading>
              <div className="row">
                {regularTools.map(tool => (
                  <div key={tool.id} className="col col--4 margin-bottom--lg">
                    <ToolCard tool={tool} />
                  </div>
                ))}
              </div>
            </>
          )}
          
          {/* Embedded tool demos - Currently commented out 
          <div className="margin-top--xl">
            <Heading as="h2" className="margin-bottom--lg text--center">
              <Translate>Real-time Market Data</Translate>
            </Heading>
            <div className="row margin-bottom--lg">
              <div className="col col--12">
                <div className="card shadow--md">
                  <div className="card__header">
                    <Heading as="h3">
                      <Translate>Global Market Overview</Translate>
                    </Heading>
                  </div>
                  <div className="card__body">
                    <iframe
                      src="https://www.tradingview.com/chart/?symbol=NASDAQ:AAPL"
                      style={{width: '100%', height: '500px'}}
                      frameBorder="0"
                      allowFullScreen
                    />
                  </div>
                </div>
              </div>
            </div>
            
            <div className="row">
              <div className="col col--6">
                <div className="card shadow--md">
                  <div className="card__header">
                    <Heading as="h3">
                      <Translate>Cryptocurrency Market</Translate>
                    </Heading>
                  </div>
                  <div className="card__body">
                    <iframe
                      src="https://coinmarketcap.com/widget/price-marquee/"
                      style={{width: '100%', height: '400px'}}
                      frameBorder="0"
                      allowFullScreen
                    />
                  </div>
                </div>
              </div>
              <div className="col col--6">
                <div className="card shadow--md">
                  <div className="card__header">
                    <Heading as="h3">
                      <Translate>Economic Calendar</Translate>
                    </Heading>
                  </div>
                  <div className="card__body">
                    <iframe
                      src="https://www.investing.com/economic-calendar/Service/economicCalendar"
                      style={{width: '100%', height: '400px'}}
                      frameBorder="0"
                      allowFullScreen
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          */}
        </div>
      </main>
    </Layout>
  );
} 