import Link from 'next/link';
import { FunctionComponent } from 'react';
import Hero from '../components/hero';
import Meta from '../components/meta';
import Layout from '../layout/layout';

const architecturePillars = [
  {
    icon: 'icon-desktop_windows',
    title: 'Local-first desktop app',
    description:
      'Mockoon runs entirely on your machine. Your mock APIs, request data, and responses live on your computer, they never touch our servers.',
    points: [
      'Mocks are stored locally on your disk',
      'Requests are served directly from your machine',
      'No proxy or relay servers in between',
      'Works fully offline with no account required'
    ]
  },
  {
    icon: 'icon-https',
    title: 'What we never see',
    description:
      'Zero telemetry in your apps. The data flowing through your mocks and the responses you build are never reported to us.',
    points: [
      'No request body or response content',
      'No data captured by your mocks',
      'No environment file content',
      'No usage tracking of your mock endpoints'
    ]
  },
  {
    icon: 'icon-cloud',
    title: 'Cloud sync is opt-in',
    description:
      'Mockoon Cloud is optional. By default you work locally and nothing syncs. Opt in to sync environments across devices and collaborate with your team.',
    points: [
      'Local-only by default',
      'Cloud sync requires explicit opt-in',
      'Synced data is encrypted at rest',
      'All traffic runs over TLS'
    ]
  }
];

const desktopSecurity = [
  {
    icon: 'icon-code',
    title: 'Open Source',
    description:
      'Mockoon desktop and CLI are MIT-licensed. The source code is public and community-auditable, you can verify exactly what runs on your machine.',
    link: { text: 'View on GitHub', url: 'https://github.com/mockoon/mockoon' }
  },
  {
    icon: 'icon-security',
    title: 'Dependency Scanning',
    description:
      'Automated dependency scanning on every repository. Critical vulnerabilities are patched promptly and tracked to remediation.'
  },
  {
    icon: 'icon-vpn_key',
    title: 'Code Signing',
    description:
      'Windows binaries are signed with a certificate, macOS builds are notarized with Apple, and Linux packages are checksum-verified. Your OS can verify authenticity automatically.'
  },
  {
    icon: 'icon-visibility_off',
    title: 'No Telemetry',
    description:
      'No mock content, request bodies, or response data is ever reported to us, and we have no telemetry in the app. We never see your data, and we never track how you use the app.',
    link: { text: 'Privacy Policy', url: '/privacy/' }
  },
  {
    icon: 'icon-wifi_off',
    title: 'Fully Offline Capable',
    description:
      'The desktop app and CLI work with no internet connection. No external servers are required to run your mocks, and you can work fully offline without an account.'
  },
  {
    icon: 'icon-refresh',
    title: 'SDLC & Change Management',
    description:
      'All changes to the desktop app, CLI, and cloud services are authorized, tested, reviewed, and approved before being released to production.'
  }
];

const cloudSecurity = [
  {
    icon: 'icon-https',
    title: 'Encryption',
    description:
      'TLS everywhere. Sensitive customer data is encrypted at rest using industry-standard protocols. Secure transmission protocols protect data sent over public networks.'
  },
  {
    icon: 'icon-verified_user',
    title: 'Access Control',
    description:
      'MFA required on all production systems. Privileged access to databases, OS, and networks is restricted to authorized personnel with a business need. Access is reviewed quarterly and revoked on termination.'
  },
  {
    icon: 'icon-warning',
    title: 'Incident Response',
    description:
      'Documented security and privacy incident response procedures. Incidents are logged, tracked, resolved, and communicated to affected parties. The incident response plan is tested at least annually.',
    link: {
      text: 'Security Policy',
      url: 'https://github.com/mockoon/mockoon/security/policy'
    }
  },
  {
    icon: 'icon-storage',
    title: 'Backup & Recovery',
    description:
      'Automated backups with documented retention. Business Continuity and Disaster Recovery plans are in place and tested at least annually.'
  },
  {
    icon: 'icon-bar_chart',
    title: 'Monitoring',
    description:
      'Continuous infrastructure and security monitoring with real-time alerting. Intrusion detection, log management, and host-based vulnerability scans are performed regularly.'
  },
  {
    icon: 'icon-search',
    title: 'Penetration Testing',
    description:
      'Penetration testing is performed at least annually. Identified vulnerabilities are tracked to remediation in accordance with defined SLAs.'
  }
];

const subprocessors = [
  {
    purpose: 'Hosting & Infrastructure',
    vendor: 'Google Cloud Platform',
    description: 'Managed cloud platform hosting Mockoon Cloud services.'
  },
  {
    purpose: 'Authentication & Database',
    vendor: 'Firebase',
    description:
      'User authentication and database services. Data encrypted at rest.'
  },
  {
    purpose: 'Payments',
    vendor: 'Paddle',
    description:
      'Merchant of record for subscriptions. PCI-DSS compliant. We never store card numbers.'
  },
  {
    purpose: 'Email',
    vendor: 'AWS SES',
    description:
      'Transactional email delivery for account notifications and customer communications.'
  },
  {
    purpose: 'CDN, DDoS, Security & DNS',
    vendor: 'Cloudflare',
    description:
      'Content delivery network, DDoS protection, web application firewall, and DNS management for our public-facing services.'
  },
  {
    purpose: 'Source Code, CI/CD & Releases',
    vendor: 'GitHub',
    description:
      'Private repositories with branch protection and code review. Also used for continuous integration, build pipelines, and hosting of release artifacts.'
  },
  {
    purpose: 'Docker Image Distribution',
    vendor: 'Docker Hub',
    description:
      'Public hosting and distribution of the official Mockoon CLI Docker images.'
  },
  {
    purpose: 'Windows App Distribution',
    vendor: 'Microsoft Store',
    description:
      'Distribution channel for the Mockoon desktop application on Windows.'
  },
  {
    purpose: 'Linux App Distribution',
    vendor: 'Snap Store (Canonical)',
    description:
      'Distribution channel for the Mockoon desktop application as a Snap package on Linux.'
  }
];

const compliance = [
  { name: 'GDPR', region: 'European Union' },
  { name: 'CCPA', region: 'California' },
  { name: 'UK Data Protection Act', region: 'United Kingdom' },
  { name: 'PIPEDA', region: 'Canada' }
];

const controls = [
  {
    title: 'Infrastructure Security',
    items: [
      {
        title: 'Encryption key access restricted',
        description:
          'The company restricts privileged access to encryption keys to authorized users with a business need.'
      },
      {
        title: 'Firewall access restricted',
        description:
          'The company restricts privileged access to the firewall to authorized users with a business need.'
      },
      {
        title: 'Remote access MFA enforced',
        description:
          "The company's production systems can only be remotely accessed by authorized employees possessing a valid multi-factor authentication (MFA) method."
      },
      {
        title: 'Intrusion detection system utilized',
        description:
          "The company uses an intrusion detection system to provide continuous monitoring of the company's network and early detection of potential security breaches."
      },
      {
        title: 'Unique production database authentication enforced',
        description:
          'The company requires authentication to production datastores to use authorized secure authentication mechanisms, such as unique SSH key.'
      },
      {
        title: 'Unique account authentication enforced',
        description:
          'The company requires authentication to systems and applications to use unique username and password or authorized Secure Socket Shell (SSH) keys.'
      },
      {
        title: 'Production application access restricted',
        description: 'System access restricted to authorized access only.'
      },
      {
        title: 'Access control procedures established',
        description:
          "The company's access control policy documents the requirements for adding new users, modifying users, and removing an existing user's access."
      },
      {
        title: 'Production database access restricted',
        description:
          'The company restricts privileged access to databases to authorized users with a business need.'
      },
      {
        title: 'Production OS access restricted',
        description:
          'The company restricts privileged access to the operating system to authorized users with a business need.'
      },
      {
        title: 'Production network access restricted',
        description:
          'The company restricts privileged access to the production network to authorized users with a business need.'
      },
      {
        title: 'Access revoked upon termination',
        description:
          'The company completes termination checklists to ensure that access is revoked for terminated employees within SLAs.'
      },
      {
        title: 'Unique network system authentication enforced',
        description:
          'The company requires authentication to the production network to use unique usernames and passwords or authorized Secure Socket Shell (SSH) keys.'
      },
      {
        title: 'Remote access encrypted enforced',
        description:
          "The company's production systems can only be remotely accessed by authorized employees via an approved encrypted connection."
      },
      {
        title: 'Log management utilized',
        description:
          "The company utilizes a log management tool to identify events that may have a potential impact on the company's ability to achieve its security objectives."
      },
      {
        title: 'Infrastructure performance monitored',
        description:
          'An infrastructure monitoring tool is utilized to monitor systems, infrastructure, and performance and generates alerts when specific predefined thresholds are met.'
      },
      {
        title: 'Network segmentation implemented',
        description:
          "The company's network is segmented to prevent unauthorized access to customer data."
      },
      {
        title: 'Network firewalls reviewed',
        description:
          'The company reviews its firewall rulesets at least annually. Required changes are tracked to completion.'
      },
      {
        title: 'Network firewalls utilized',
        description:
          'The company uses firewalls and configures them to prevent unauthorized access.'
      },
      {
        title: 'Network and system hardening standards maintained',
        description:
          "The company's network and system hardening standards are documented, based on industry best practices, and reviewed at least annually."
      },
      {
        title: 'Service infrastructure maintained',
        description:
          'The company has infrastructure supporting the service patched as a part of routine maintenance and as a result of identified vulnerabilities to help ensure that servers supporting the service are hardened against security threats.'
      }
    ]
  },
  {
    title: 'Organizational Security',
    items: [
      {
        title: 'Asset disposal procedures utilized',
        description:
          'The company has electronic media containing confidential information purged or destroyed in accordance with best practices, and certificates of destruction are issued for each device destroyed.'
      },
      {
        title: 'Portable media encrypted',
        description:
          'The company encrypts portable and removable media devices when used.'
      },
      {
        title: 'Anti-malware technology utilized',
        description:
          'The company deploys anti-malware technology to environments commonly susceptible to malicious attacks and configures this to be updated routinely, logged, and installed on all relevant systems.'
      },
      {
        title: 'Employee background checks performed',
        description: 'The company performs background checks on new employees.'
      },
      {
        title: 'Performance evaluations conducted',
        description:
          'The company managers are required to complete performance evaluations for direct reports at least annually.'
      },
      {
        title: 'Password policy enforced',
        description:
          "The company requires passwords for in-scope system components to be configured according to the company's policy."
      },
      {
        title: 'Production inventory maintained',
        description:
          'The company maintains a formal inventory of production system assets.'
      },
      {
        title: 'Code of Conduct acknowledged by contractors',
        description:
          'The company requires contractor agreements to include a code of conduct or reference to the company code of conduct.'
      },
      {
        title: 'Code of Conduct acknowledged by employees and enforced',
        description:
          'The company requires employees to acknowledge a code of conduct at the time of hire. Employees who violate the code of conduct are subject to disciplinary actions in accordance with a disciplinary policy.'
      },
      {
        title: 'Confidentiality Agreement acknowledged by contractors',
        description:
          'The company requires contractors to sign a confidentiality agreement at the time of engagement.'
      },
      {
        title: 'Confidentiality Agreement acknowledged by employees',
        description:
          'The company requires employees to sign a confidentiality agreement during onboarding.'
      },
      {
        title: 'MDM system utilized',
        description:
          'The company has a mobile device management (MDM) system in place to centrally manage mobile devices supporting the service.'
      }
    ]
  },
  {
    title: 'Product Security',
    items: [
      {
        title: 'Penetration testing performed',
        description:
          "The company's penetration testing is performed at least annually. A remediation plan is developed and changes are implemented to remediate vulnerabilities in accordance with SLAs."
      },
      {
        title: 'Data encryption utilized',
        description:
          "The company's datastores housing sensitive customer data are encrypted at rest."
      },
      {
        title: 'Control self-assessments conducted',
        description:
          'The company performs control self-assessments at least annually to gain assurance that controls are in place and operating effectively. Corrective actions are taken based on relevant findings.'
      },
      {
        title: 'Data transmission encrypted',
        description:
          'The company uses secure data transmission protocols to encrypt confidential and sensitive data when transmitted over public networks.'
      },
      {
        title: 'Vulnerability and system monitoring procedures established',
        description:
          "The company's formal policies outline the requirements for vulnerability management and system monitoring."
      }
    ]
  },
  {
    title: 'Internal Security Procedures',
    items: [
      {
        title: 'Change management procedures enforced',
        description:
          'The company requires changes to software and infrastructure components of the service to be authorized, formally documented, tested, reviewed, and approved prior to being implemented in the production environment.'
      },
      {
        title: 'System changes externally communicated',
        description:
          'The company notifies customers of critical system changes that may affect their processing.'
      },
      {
        title: 'System changes communicated',
        description:
          'The company communicates system changes to authorized internal users.'
      },
      {
        title: 'Access reviews conducted',
        description:
          'The company conducts access reviews at least quarterly for the in-scope system components to help ensure that access is restricted appropriately. Required changes are tracked to completion.'
      },
      {
        title: 'Access requests required',
        description:
          'The company ensures that user access to in-scope system components is based on job role and function or requires a documented access request form and manager approval prior to access being provisioned.'
      },
      {
        title: 'Incident management procedures followed',
        description:
          "The company's security and privacy incidents are logged, tracked, resolved, and communicated to affected or relevant parties by management according to the company's security incident response policy and procedures."
      },
      {
        title: 'Risk assessments performed',
        description:
          "The company's risk assessments are performed at least annually. As part of this process, threats and changes (environmental, regulatory, and technological) to service commitments are identified and the risks are formally assessed."
      },
      {
        title: 'Third-party agreements established',
        description:
          'The company has written agreements in place with vendors and related third-parties. These agreements include confidentiality and privacy commitments applicable to that entity.'
      },
      {
        title: 'Vendor management program established',
        description:
          "The company has a vendor management program in place including critical third-party vendor inventory, vendor's security and privacy requirements, and review of critical third-party vendors at least annually."
      },
      {
        title: 'Vulnerabilities scanned and remediated',
        description:
          'Host-based vulnerability scans are performed at least quarterly on all external-facing systems. Critical and high vulnerabilities are tracked to remediation.'
      },
      {
        title: 'Continuity and Disaster Recovery plans established',
        description:
          'The company has Business Continuity and Disaster Recovery Plans in place that outline communication plans in order to maintain information security continuity in the event of the unavailability of key personnel.'
      },
      {
        title: 'Continuity and disaster recovery plans tested',
        description:
          'The company has a documented business continuity/disaster recovery (BC/DR) plan and tests it at least annually.'
      },
      {
        title: 'Configuration management system established',
        description:
          'The company has a configuration management procedure in place to ensure that system configurations are deployed consistently throughout the environment.'
      },
      {
        title: 'Production deployment access restricted',
        description:
          'The company restricts access to migrate changes to production to authorized personnel.'
      },
      {
        title: 'Development lifecycle established',
        description:
          'The company has a formal systems development life cycle (SDLC) methodology in place that governs the development, acquisition, implementation, changes (including emergency changes), and maintenance of information systems and related technology requirements.'
      },
      {
        title: 'Backup processes established',
        description:
          "The company's data backup policy documents requirements for backup and recovery of customer data."
      },
      {
        title: 'Security policies established and reviewed',
        description:
          "The company's information security policies and procedures are documented and reviewed at least annually."
      },
      {
        title: 'Support system available',
        description:
          'The company has an external-facing support system in place that allows users to report system information on failures, incidents, concerns, and other complaints to appropriate personnel.'
      },
      {
        title: 'Incident response plan tested',
        description:
          'The company tests their incident response plan at least annually.'
      },
      {
        title: 'Incident response policies established',
        description:
          'The company has security and privacy incident response policies and procedures that are documented and communicated to authorized users.'
      },
      {
        title: 'Service description communicated',
        description:
          'The company provides a description of its products and services to internal and external users.'
      },
      {
        title: 'Risk assessment objectives specified',
        description:
          'The company specifies its objectives to enable the identification and assessment of risk related to the objectives.'
      },
      {
        title: 'Risk management program established',
        description:
          'The company has a documented risk management program in place that includes guidance on the identification of potential threats, rating the significance of the risks associated with the identified threats, and mitigation strategies for those risks.'
      }
    ]
  },
  {
    title: 'Data and Privacy',
    items: [
      {
        title: 'Data retention procedures established',
        description:
          'The company has formal retention and disposal procedures in place to guide the secure retention and disposal of company and customer data.'
      },
      {
        title: 'Customer data deleted upon leaving',
        description:
          'The company purges or removes customer data containing confidential information from the application environment, in accordance with best practices, when customers leave the service.'
      },
      {
        title: 'Data classification policy established',
        description:
          'The company has a data classification policy in place to help ensure that confidential data is properly secured and restricted to authorized personnel.'
      }
    ]
  }
];

const sections = [
  { id: 'architecture', label: 'Architecture' },
  { id: 'desktop', label: 'Desktop app' },
  { id: 'cloud', label: 'Cloud services' },
  { id: 'infrastructure', label: 'Infrastructure' },
  { id: 'compliance', label: 'Compliance' },
  { id: 'controls', label: 'Security controls' },
  { id: 'documentation', label: 'Documentation' },
  { id: 'contact', label: 'Contact' }
];

const TrustPage: FunctionComponent = function () {
  return (
    <Layout footerBanner='download'>
      <Meta
        title="Mockoon's Trust Center"
        description="Learn about Mockoon's security practices, privacy policies, and enterprise-grade controls that protect your data and development workflows."
      />

      <Hero
        title='Mockoon <span class="text-primary">Trust Center</span>'
        subtitle='Your mock data stays on your machine. Mockoon is local-first, open source, and built with security and privacy at its core.'
      />

      {/* Section index */}
      <section className='py-4 border-top border-bottom bg-white'>
        <div className='container'>
          <ul className='nav justify-content-center flex-wrap gap-3 mb-0'>
            {sections.map((s, i) => (
              <li key={s.id} className='nav-item'>
                <Link
                  href={`#${s.id}`}
                  className='text-gray-700 text-decoration-none small fw-medium'
                >
                  <span className='text-primary me-1'>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  {s.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 01 - Architecture */}
      <section
        id='architecture'
        className='py-6 py-md-8 border-bottom bg-gradient-light-white'
      >
        <div className='container'>
          <div className='row mb-6'>
            <div className='col-12 col-lg-8 mx-auto text-center'>
              <p className='text-uppercase text-primary fw-bold small mb-2'>
                01 · Architecture
              </p>
              <h2 className='display-5 fw-medium mb-3'>
                Your data stays on your machine
              </h2>
              <p className='lead text-gray-700 mb-0'>
                Mockoon is a desktop application. By default, your mock APIs,
                request data, and responses stay on your computer, they never
                touch our servers. Cloud sync is opt-in, and you remain in
                control of what gets synced.
              </p>
            </div>
          </div>
          <div className='row g-4'>
            {architecturePillars.map((pillar, i) => (
              <div key={i} className='col-12 col-md-4'>
                <div className='card card-bleed shadow-light-lg h-100'>
                  <div className='card-body'>
                    <h4 className='mb-3'>
                      <i className={`${pillar.icon} text-primary me-2`}></i>
                      {pillar.title}
                    </h4>
                    <p className='text-gray-700 mb-4'>{pillar.description}</p>
                    <ul className='list-unstyled mb-0'>
                      {pillar.points.map((point, j) => (
                        <li
                          key={j}
                          className='d-flex align-items-start mb-2 small text-gray-700'
                        >
                          <i className='icon-check text-success me-2 mt-1'></i>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 02 - Desktop application security */}
      <section id='desktop' className='py-6 py-md-8 border-bottom'>
        <div className='container'>
          <div className='row mb-6'>
            <div className='col-12 col-lg-8 mx-auto text-center'>
              <p className='text-uppercase text-primary fw-bold small mb-2'>
                02 · Desktop app
              </p>
              <h2 className='display-5 fw-medium mb-3'>
                Desktop application security
              </h2>
              <p className='lead text-gray-700 mb-0'>
                Security practices built into the application itself, protecting
                every user regardless of plan.
              </p>
            </div>
          </div>
          <div className='row g-4'>
            {desktopSecurity.map((item, i) => (
              <div key={i} className='col-12 col-md-6 col-lg-4'>
                <div className='card card-bleed shadow-light-lg h-100'>
                  <div className='card-body'>
                    <h4 className='mb-3'>
                      <i className={`${item.icon} text-primary me-2`}></i>
                      {item.title}
                    </h4>
                    <p className='text-gray-700 mb-3'>{item.description}</p>
                    {item.link && (
                      <Link
                        href={item.link.url}
                        className='fw-bold text-decoration-none'
                      >
                        {item.link.text} <i className='icon-arrow_forward'></i>
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 03 - Cloud service security */}
      <section
        id='cloud'
        className='py-6 py-md-8 border-bottom bg-gradient-light-white'
      >
        <div className='container'>
          <div className='row mb-6'>
            <div className='col-12 col-lg-8 mx-auto text-center'>
              <p className='text-uppercase text-primary fw-bold small mb-2'>
                03 · Cloud services
              </p>
              <h2 className='display-5 fw-medium mb-3'>
                Cloud service security
              </h2>
              <p className='lead text-gray-700 mb-0'>
                For our optional cloud services, accounts, billing, and
                environment sync, we maintain these practices.
              </p>
            </div>
          </div>
          <div className='row g-4'>
            {cloudSecurity.map((item, i) => (
              <div key={i} className='col-12 col-md-6 col-lg-4'>
                <div className='card card-bleed shadow-light-lg h-100'>
                  <div className='card-body'>
                    <h4 className='mb-3'>
                      <i className={`${item.icon} text-primary me-2`}></i>
                      {item.title}
                    </h4>
                    <p className='text-gray-700 mb-3'>{item.description}</p>
                    {item.link && (
                      <Link
                        href={item.link.url}
                        className='fw-bold text-decoration-none'
                      >
                        {item.link.text} <i className='icon-arrow_forward'></i>
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 04 - Infrastructure / Sub-processors */}
      <section id='infrastructure' className='py-6 py-md-8 border-bottom'>
        <div className='container'>
          <div className='row mb-6'>
            <div className='col-12 col-lg-8 mx-auto text-center'>
              <p className='text-uppercase text-primary fw-bold small mb-2'>
                04 · Sub-processors
              </p>
              <h2 className='display-5 fw-medium mb-3'>Our infrastructure</h2>
              <p className='lead text-gray-700 mb-0'>
                Our cloud footprint is deliberately small. We rely on a curated
                set of trusted, audited providers.
              </p>
            </div>
          </div>
          <div className='row justify-content-center'>
            <div className='col-12 col-lg-10'>
              <div className='card card-bleed shadow-light-lg'>
                <div className='card-body'>
                  <div className='list-group list-group-flush'>
                    {subprocessors.map((sub, i) => (
                      <div key={i} className='list-group-item py-4'>
                        <div className='row align-items-center'>
                          <div className='col-12 col-md-3'>
                            <p className='text-uppercase text-gray-600 small fw-bold mb-0'>
                              {sub.purpose}
                            </p>
                          </div>
                          <div className='col-12 col-md-3'>
                            <p className='mb-0 fw-bold'>{sub.vendor}</p>
                          </div>
                          <div className='col-12 col-md-6'>
                            <p className='text-gray-700 mb-0 small'>
                              {sub.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 05 - Compliance */}
      <section
        id='compliance'
        className='py-6 py-md-8 border-bottom bg-gradient-light-white'
      >
        <div className='container'>
          <div className='row mb-6'>
            <div className='col-12 col-lg-8 mx-auto text-center'>
              <p className='text-uppercase text-primary fw-bold small mb-2'>
                05 · Compliance
              </p>
              <h2 className='display-5 fw-medium mb-3'>
                Regulatory compliance
              </h2>
              <p className='lead text-gray-700 mb-0'>
                We support customers operating under these privacy and
                data-protection frameworks.
              </p>
            </div>
          </div>
          <div className='row justify-content-center g-3'>
            {compliance.map((c, i) => (
              <div key={i} className='col-6 col-md-3'>
                <div className='card card-bleed shadow-light-lg h-100 text-center'>
                  <div className='card-body'>
                    <div className='badge badge-rounded-circle text-bg-success-subtle'>
                      <i className='icon-check'></i>
                    </div>
                    <h5 className='mb-1'>{c.name}</h5>
                    <p className='text-gray-600 small mb-0'>{c.region}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 06 - Security controls (existing detailed list) */}
      <section id='controls' className='py-6 py-md-8 border-bottom'>
        <div className='container'>
          <div className='row mb-6'>
            <div className='col-12 col-lg-8 mx-auto text-center'>
              <p className='text-uppercase text-primary fw-bold small mb-2'>
                06 · Security controls
              </p>
              <h2 className='display-5 fw-medium mb-3'>
                Continuously monitored controls
              </h2>
              <p className='lead text-gray-700 mb-0'>
                The comprehensive set of controls we maintain and monitor to
                protect your data and ensure the integrity of our service.
              </p>
            </div>
          </div>
          <div className='row'>
            <div className='col-12 col-lg-3 mb-6 mb-lg-0'>
              <div className='card card-bleed shadow-light-lg sticky-top'>
                <div className='card-body'>
                  <p className='text-uppercase text-gray-600 small fw-bold mb-3'>
                    Categories
                  </p>
                  <ul className='list-unstyled mb-0'>
                    {controls.map((controlCategory, categoryIndex) => (
                      <li
                        key={`menucontrolcategory${categoryIndex}`}
                        className='py-1'
                      >
                        <Link
                          href={`#category-${categoryIndex}`}
                          className='text-reset text-decoration-none'
                        >
                          {controlCategory.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className='col-12 col-lg-9'>
              {controls.map((controlCategory, categoryIndex) => (
                <div
                  key={`controlcategory${categoryIndex}`}
                  id={`category-${categoryIndex}`}
                  className='card card-bleed shadow-light-lg mb-6'
                >
                  <div className='card-header'>
                    <div className='row align-items-center'>
                      <div className='col'>
                        <h4 className='mb-0'>{controlCategory.title}</h4>
                      </div>
                    </div>
                  </div>
                  <div className='card-body'>
                    <div className='list-group list-group-flush'>
                      {controlCategory.items.map((item, itemIndex) => (
                        <div
                          key={`control${itemIndex}`}
                          className='list-group-item'
                        >
                          <div className='row align-items-center'>
                            <div className='col'>
                              <p className='mb-0'>{item.title}</p>
                              <p className='text-gray-700 mb-0'>
                                {item.description}
                              </p>
                            </div>
                            <div className='col-auto ms-auto'>
                              <div className='badge badge-rounded-circle text-bg-success'>
                                <i className='icon-check'></i>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 07 - Documentation */}
      <section
        id='documentation'
        className='py-6 py-md-8 border-bottom bg-gradient-light-white'
      >
        <div className='container'>
          <div className='row mb-6'>
            <div className='col-12 col-lg-8 mx-auto text-center'>
              <p className='text-uppercase text-primary fw-bold small mb-2'>
                07 · Documentation
              </p>
              <h2 className='display-5 fw-medium mb-3'>Read our policies</h2>
            </div>
          </div>
          <div className='row g-4 justify-content-center'>
            <div className='col-12 col-md-6 col-lg-5'>
              <div className='card card-bleed shadow-light-lg h-100'>
                <div className='card-body'>
                  <h4 className='mb-4'>
                    <i className='icon-description text-primary me-2'></i>
                    Privacy &amp; Legal
                  </h4>
                  <ul className='list-unstyled mb-0'>
                    <li className='py-1'>
                      <Link
                        href='/privacy/'
                        className='text-reset text-decoration-none'
                      >
                        Privacy Policy <i className='icon-north_east'></i>
                      </Link>
                    </li>
                    <li className='py-1'>
                      <Link
                        href='/terms/'
                        className='text-reset text-decoration-none'
                      >
                        Terms of Service <i className='icon-north_east'></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='col-12 col-md-6 col-lg-5'>
              <div className='card card-bleed shadow-light-lg h-100'>
                <div className='card-body'>
                  <h4 className='mb-4'>
                    <i className='icon-security text-primary me-2'></i>
                    Security
                  </h4>
                  <ul className='list-unstyled mb-0'>
                    <li className='py-1'>
                      <Link
                        href='https://github.com/mockoon/mockoon/security/policy'
                        className='text-reset text-decoration-none'
                      >
                        Responsible Disclosure{' '}
                        <i className='icon-north_east'></i>
                      </Link>
                    </li>
                    <li className='py-1'>
                      <Link
                        href='https://github.com/mockoon/mockoon'
                        className='text-reset text-decoration-none'
                      >
                        Open Source on GitHub{' '}
                        <i className='icon-north_east'></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 08 - Contact */}
      <section id='contact' className='py-6 py-md-8'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-12 col-lg-8 text-center'>
              <p className='text-uppercase text-primary fw-bold small mb-2'>
                08 · Talk to us
              </p>
              <h2 className='display-5 fw-medium mb-3'>
                Questions about security or compliance?
              </h2>
              <p className='lead text-gray-700 mb-6'>
                Whether you have questions, need to report a vulnerability, or
                want to discuss compliance requirements for your organization,
                we're here to help.
              </p>
              <div className='d-flex justify-content-center flex-wrap gap-3'>
                <Link href='/contact/' className='btn btn-primary'>
                  <i className='icon-email me-2'></i>
                  Contact us
                </Link>
                <Link
                  href='https://github.com/mockoon/mockoon/security/policy'
                  className='btn btn-outline-primary'
                >
                  <i className='icon-security me-2'></i>
                  Report a vulnerability
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default TrustPage;
