import React, {useState} from 'react';
import styles from './Tabs.module.css';

function Tabs() {
  const [activeTab, setActiveTab] = useState(0);
  const tabLabels = ['First', 'Second', 'Third'];

  return (
    <div>
      <div className={styles.tabsContainer}>
        <div className={styles.tabs}>
          {tabLabels.map((label, index) =>(
           <button
            key={index}
            className={`${styles.tab} ${index === activeTab ? styles.activeTab : ''}`}
            onClick={() => setActiveTab(index)}
           >
            {label}
           </button> 
          ))}
        </div>
        <div className={styles.tabContent}>
          {activeTab === 0 && <p>This is content for the first tab.</p>}
          {activeTab === 0 && <p>This is content for the first tab.</p>}
          {activeTab === 0 && <p>This is content for the first tab.</p>}
        </div>
      </div>
    </div>
  )
}

export default Tabs
