import React from 'react';
import styles from './TeamSection.module.css';
import { teamData } from '@/data/teamData';
import { Phone, Mail, Award, CheckCircle2, UserCheck } from 'lucide-react';

export default function TeamSection() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.grid}>
        {teamData.map((member) => (
          <div key={member.name} className={`glass-card ${styles.card}`}>
            <div className={styles.cardHeader}>
              <div className={styles.avatarBox}>
                <UserCheck size={28} className={styles.avatarIcon} />
              </div>
              <div className={styles.headerText}>
                <span className={styles.deptTag}>{member.department}</span>
                <h3 className={styles.name}>{member.name}</h3>
                <span className={styles.role}>{member.role}</span>
              </div>
            </div>

            <p className={styles.experience}>{member.experience}</p>

            {member.highlightProjects && member.highlightProjects.length > 0 && (
              <div className={styles.projectTagsBox}>
                <span className={styles.projectTagsLabel}>Vybrané stavby v portfoliu:</span>
                <div className={styles.tags}>
                  {member.highlightProjects.map((p, i) => (
                    <span key={i} className={styles.tag}>{p}</span>
                  ))}
                </div>
              </div>
            )}

            <div className={styles.contactBar}>
              {member.phone && (
                <a href={`tel:${member.phone.replace(/\s+/g, '')}`} className={styles.contactLink}>
                  <Phone size={14} className={styles.icon} />
                  <span>{member.phone}</span>
                </a>
              )}
              <a href={`mailto:${member.email}`} className={styles.contactLink}>
                <Mail size={14} className={styles.icon} />
                <span>{member.email}</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
