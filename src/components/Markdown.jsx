import ReactMarkdown from 'react-markdown';
import styles from './Markdown.module.css';

const components = {
  h1: ({ children }) => <h2 className={styles.heading}>{children}</h2>,
  h2: ({ children }) => <h2 className={styles.heading}>{children}</h2>,
  h3: ({ children }) => <h3 className={styles.subheading}>{children}</h3>,
  p: ({ children }) => <p className={styles.paragraph}>{children}</p>,
  ul: ({ children }) => <ul className={styles.list}>{children}</ul>,
  ol: ({ children }) => <ol className={styles.list}>{children}</ol>,
  li: ({ children }) => <li className={styles.listItem}>{children}</li>,
  strong: ({ children }) => <strong className={styles.strong}>{children}</strong>,
  code: ({ children }) => <code className={styles.code}>{children}</code>,
  a: ({ href, children }) => (
    <a className={styles.link} href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  ),
};

export default function Markdown({ children }) {
  return (
    <div className={styles.markdown}>
      <ReactMarkdown components={components}>{children}</ReactMarkdown>
    </div>
  );
}
