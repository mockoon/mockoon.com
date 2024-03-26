import { FunctionComponent } from 'react';
import Hero from '../components/hero';
import Meta from '../components/meta';
import Layout from '../layout/layout';

const Terms: FunctionComponent = function () {
  return (
    <Layout footerBanner='download'>
      <Meta
        title="Mockoon's Terms of service"
        description='Mockoon is the fastest and easiest way to create mock API servers. Our tools are privacy and regulated-industry friendly'
      />

      <Hero title='Terms of service' subtitle='Last update March 31, 2024' />
      <section className='pb-8'>
        <div className='container'>
          <div className='row'>
            <div className='col-12'>
              <p>
                These terms of service ("Agreement") govern your use of
                Mockoon's cloud products and services ("Service") provided by
                1kB SARL-S, doing business as "Mockoon" ("Company", "we", "us",
                and/or "our). By accessing or using the Service, you acknowledge
                that you have read, understood, and agree to be bound by this
                Agreement.
              </p>
              <p>The Service is provided by:</p>
              <p className='ps-4'>
                <strong>1kB SARL-S</strong>
                <br />
                Luxembourg business register: B257186 <br />
                VAT: LU33209738
                <br />
                Contact email:{' '}
                <a href='mailto:support@mockoon.com'>support@mockoon.com</a>
                <br />
                Account management interface:{' '}
                <a href='https://mockoon.com/account/info/'>
                  https://mockoon.com/account/info/
                </a>
                <br />
                Cloud services status page:{' '}
                <a href='https://mockoon.com/status/'>
                  https://mockoon.com/status/
                </a>
              </p>
              <p>
                By accepting this Agreement, you represent and warrant that you
                have the legal capacity to enter into this Agreement and that
                you are of legal age in your jurisdiction to form a binding
                contract. If you are accepting this Agreement on behalf of a
                company, business or other legal entity, you further represent
                and warrant that you have the authority to bind that entity to
                this Agreement, in which case the term "you" shall refer to such
                entity. If you do not have such authority, or if you don't agree
                with this Agreement, you must not accept this Agreement and may
                not use the Service.
              </p>
              <h3 className='mt-6 fw-medium'>1. Account registration</h3>
              <p>
                By creating an account or signing up for our Service, you agree
                to provide accurate, up-to-date, and complete information during
                the signup process. You are solely responsible for maintaining
                the security and confidentiality of your login credentials. Each
                user must have unique login credentials that must not be shared
                by multiple users.
              </p>
              <p>
                You are responsible for all activities that occur using your
                account. In the event of any unauthorized use or breach of your
                account, you must notify us immediately to take appropriate
                action and mitigate any potential harm.
              </p>
              <h3 className='mt-6 fw-medium'>2. Account termination</h3>
              <p>
                You may request the termination of your account at any time by
                contacting us through the provided contact information.
              </p>
              <p>
                We reserve the right to terminate or suspend your account, in
                our sole discretion, for any reason including, but not limited
                to, violation of this Agreement or suspected unauthorized use of
                the Service.
              </p>
              <p>
                Upon termination of your account, your access to the Service
                will be deactivated, and you may no longer have access to your
                account or any data associated with it.
              </p>
              <p>
                We shall not be liable to you or any third party for any
                termination of your account or access to the Service.
              </p>
              <p>
                Please note that termination of your account does not relieve
                you of any obligations or liabilities accrued prior to the
                termination.
              </p>
              <h3 className='mt-6 fw-medium'>3. Temporary use license</h3>
              <p>
                During the period for which you are authorized to use the
                Service and subject to your compliance with the terms of this
                Agreement, we grant you a limited, non-exclusive,
                non-transferable, revocable license to access and use our
                Service during the term of your subscription, solely for your
                personal or internal business purposes.
              </p>
              <p>
                You acknowledge and agree that all intellectual property rights,
                including but not limited to software, trademarks, logos, and
                any related documentation associated with our Service, are and
                shall remain the exclusive property of our Company.
              </p>
              <p>
                Open-source applications made available to you under separate
                open-source licenses are subject to their respective terms and
                conditions, and your use of such applications is governed by
                those licenses.
              </p>
              <h3 className='mt-6 fw-medium'>4. Your content and data</h3>
              <p>
                Our Service may allow you to upload, submit, store, send, or
                receive various types of content, including data, files,
                documents, feedback, suggestions, or other materials ("Your
                Content").
              </p>
              <p>
                You retain ownership of Your Content, and we claim no ownership
                or control over it. By uploading or submitting Your Content to
                our Service, you grant us a worldwide, non-exclusive,
                royalty-free, sublicensable, and transferable license to use,
                reproduce, modify, adapt, distribute, and display Your Content
                solely for the purposes of providing, operating, and improving
                the Service.
              </p>
              <p>
                You represent and warrant that you have all necessary rights,
                permissions, and consents to grant us the aforementioned license
                for Your Content and that its use by us does not violate any
                third-party rights or any applicable laws.
              </p>
              <p>
                We take reasonable measures to protect the privacy and security
                of Your Content. However, you acknowledge and agree that you are
                solely responsible for regularly backing up Your Content and
                taking appropriate security measures to protect it.
              </p>
              <p>
                We reserve the right, but not the obligation, to review,
                monitor, or remove Your Content at our sole discretion, without
                prior notice, if we believe it violates this Agreement,
                infringes upon any third-party rights, or is otherwise
                objectionable.
              </p>
              <p>
                We may use your feedback, suggestions, or ideas regarding our
                Service for any purpose without any obligation to compensate
                you. By providing such feedback, suggestions, or ideas, you
                grant us a perpetual, irrevocable, worldwide, royalty-free
                license to use, modify, distribute, and incorporate them into
                our Service or future offerings.
              </p>
              <h3 className='mt-6 fw-medium'>5. Fair use</h3>
              <p>
                We strive to ensure that all plan levels receive an adequate
                allocation of bandwidth or compute power, which we consider to
                be typical for projects at each respective plan level. We will
                make commercially reasonable efforts to provide these resources.
              </p>
              <p>
                In the event that we determine your usage to be unreasonable and
                causing an undue burden on our infrastructure or business
                operations, we reserve the right to notify you regarding the
                excessive usage. If necessary, we may take appropriate measures,
                including shutting down and terminating projects or accounts
                that create such an unreasonable burden.
              </p>
              <h3 className='mt-6 fw-medium'>6. Acceptable use</h3>
              <p>
                By accessing and using our Service, you agree to abide by this
                Acceptable Use clause and refrain from engaging in any
                activities that violate applicable laws, regulations, or this
                Agreement, or that may cause harm to our infrastructure,
                business operations, or other users.
              </p>
              <p>
                You agree not to use our Service in any manner that is unlawful,
                fraudulent, deceptive, harassing, threatening, abusive,
                offensive, obscene, or otherwise objectionable.
              </p>
              <p>You shall not:</p>
              <ul>
                <li>
                  Engage in any unauthorized access, tampering, or disruption of
                  our systems or networks.
                </li>
                <li>
                  Use our Service for any illegal purposes or to transmit or
                  store any illegal, infringing, or harmful content.
                </li>
                <li>
                  Interfere with the proper functioning, security, or
                  availability of our Service.
                </li>
                <li>
                  Introduce any viruses, malware, or other malicious code that
                  may harm or compromise our Service or the data of other users.
                </li>
                <li>
                  Engage in any activity that may compromise the privacy or data
                  security of other users.
                </li>
                <li>
                  Engage in any scraping, data mining, or data harvesting
                  activities without our prior written consent.
                </li>
                <li>
                  Use our Service to send unsolicited communications or spam.
                </li>
                <li>
                  Impersonate any person or entity, or falsely represent your
                  affiliation with any person or entity.
                </li>
              </ul>
              <p>
                We reserve the right to monitor and investigate any violations
                of this Acceptable Use clause and take appropriate actions,
                including suspending or terminating your access to the Service,
                removing or blocking content, or cooperating with law
                enforcement authorities.
              </p>
              <p>
                If you become aware of any misuse, abuse, or violation of this
                Acceptable Use clause, please promptly notify us so that we can
                address the situation appropriately.
              </p>
              <h3 className='mt-6 fw-medium'>7. Electronic communications</h3>
              <p>
                By using our Service, you consent to receive communications from
                us electronically. These communications may include notices,
                updates, alerts, invoices, and other information related to the
                use of our Service.
              </p>
              <p>
                We will primarily communicate with you through email or by
                posting notifications within our Service. You agree that all
                agreements, notices, disclosures, and other communications
                provided to you electronically satisfy any legal requirement
                that such communications be in writing.
              </p>
              <p>
                You are responsible for maintaining an accurate and up-to-date
                email address in your account settings. It is your
                responsibility to ensure that our communications are not
                filtered or blocked by your email provider or by any spam or
                junk mail filters.
              </p>
              <p>
                We may also provide you with the option to communicate with us
                electronically, such as through support tickets or chat
                functionalities. You understand that any electronic
                communication sent to us is subject to our review and may be
                retained for record-keeping and support purposes.
              </p>
              <h3 className='mt-6 fw-medium'>8. Indemnification</h3>
              <p>
                You agree to indemnify, defend, and hold us harmless from and
                against any claims, liabilities, damages, losses, and expenses,
                including reasonable attorneys' fees and costs, arising out of
                or in any way connected with:
              </p>
              <ul>
                <li>Your use of our Service.</li>
                <li>
                  Any content or materials you submit, upload, or transmit
                  through our Service.
                </li>
                <li>
                  Your violation of this Agreement or any applicable laws,
                  regulations, or third-party rights.
                </li>
                <li>
                  Any breach of your representations, warranties, or obligations
                  under this Agreement.
                </li>
                <li>
                  Any unauthorized access to or use of our Service by you or any
                  third party using your account credentials.
                </li>
                <li>
                  Any act or omission that results in harm to us, our business,
                  or our users.
                </li>
              </ul>
              <p>
                We reserve the right, at our own expense, to assume the
                exclusive defense and control of any matter otherwise subject to
                indemnification by you. In such a case, you agree to cooperate
                with our defense of such a claim and provide any necessary
                assistance.
              </p>
              <h3 className='mt-6 fw-medium'>9. Customer name</h3>
              <p>
                By using our Service, you grant us a limited, non-exclusive,
                worldwide license to use your company or business name for the
                purpose of identifying you as a customer and displaying your
                name in our marketing materials, including but not limited to
                our website, promotional materials, case studies, and customer
                testimonials.
              </p>
              <h3 className='mt-6 fw-medium'>10. Payment of fees</h3>
              <p>
                By accessing or using our Service, you agree to pay the
                applicable fee and any applicable tax as specified in the
                pricing plan or subscription you have chosen.
              </p>
              <p>
                The fees for our Service are exclusive of any applicable taxes,
                levies, or duties imposed by taxing authorities. You are
                responsible for the payment of all such taxes, levies, or
                duties, excluding those based on our net income.
              </p>
              <p>
                All fees are generally non-refundable unless otherwise expressly
                stated in this Agreement. However, we understand that
                exceptional circumstances may arise, and refund requests may be
                considered on a discretionary basis. We appreciate your
                understanding that refunds are not guaranteed and will be
                assessed based on the circumstances surrounding each individual
                case.
              </p>
              <p>
                Depending on the subscription term and plan you select, you
                authorize our payment provider (Paddle.com) to automatically
                charge the payment method you provided on a recurring basis for
                the fees associated with your chosen subscription. The charges
                will occur according to the billing cycle specified in your
                plan, whether it is monthly, annually, or as otherwise
                indicated. You agree to ensure that your payment information
                remains accurate, up to date, and valid throughout the
                subscription period.
                <br />
                If you fail to pay the fees when due or if your payment method
                is declined, we may suspend or terminate your access to our
                Service until payment is made in full. We reserve the right to
                take appropriate legal action to recover any outstanding fees.
              </p>
              <p>
                We reserve the right to update or modify the fees for our
                Service, but we will provide you with prior notice before the
                start of the next billing cycle. This notice will be sent to the
                email address associated with your account, and it is your
                responsibility to ensure that you receive and review these
                notifications. If you continue to use our Service after the fee
                change takes effect, it will be deemed as your acceptance of the
                modified fees.
              </p>
              <p>
                In the event of a dispute regarding the fees charged, you must
                notify us in writing within 30 days of the disputed charge.
                Failure to provide timely notice shall constitute your
                acceptance of the charges and waiver of any claims related to
                the disputed fees.
              </p>
              <p>
                All fees are stated and payable in United States Dollars (USD),
                unless otherwise specified.
              </p>
              <p>
                You acknowledge that our Service may integrate with third-party
                payment processors or gateways to facilitate the payment of
                fees. Any transactions processed by third-party payment
                processors are subject to their terms, conditions, and privacy
                policies.
              </p>
              <p>
                If you believe there is an error or discrepancy in the fees
                charged, please contact our support team promptly to resolve the
                issue. We will review your concern and, if necessary, make
                appropriate adjustments to rectify any billing errors.
              </p>
              <p>
                Termination of your account or cessation of your use of our
                Service does not relieve you of the obligation to pay any
                outstanding fees accrued prior to the termination or cessation.
              </p>

              <h3 className='mt-6 fw-medium'>
                11. Description of the cloud Services
              </h3>
              <h4 className='mt-6 fw-medium'>a. AI assistant</h4>
              <p>
                The AI assistant is a feature available to all our customers of
                our Pro plans. Its usage is subject to the quotas specified in
                the plan details and visible in your account. You can access the
                AI assistant from the desktop application.
              </p>
              <p>
                We do not guarantee the accuracy, reliability, or completeness
                of the AI assistant's responses. The AI assistant is not a
                substitute for professional advice, and you should not rely on
                it as the sole basis for making decisions. You are solely
                responsible for verifying the accuracy and relevance of the
                information provided by the AI assistant.
              </p>
              <p>
                We do not make any representation or warranty regarding the
                availability, performance, or functionality of the AI assistant.
                The AI assistant may be subject to downtime, errors, or
                interruptions, and we do not guarantee that it will be available
                at all times. We will make commercially reasonable efforts to
                ensure the availability and performance of the AI assistant, and
                inform you of any planned maintenance or downtime through our
                Service status page.
              </p>
              <p>
                AI assistant quotas:
                <ul>
                  <li>
                    <strong>Solo plan</strong>: 100 invocations per month.
                  </li>
                  <li>
                    <strong>Team plan</strong>: 200 invocations per month per
                    user.
                  </li>
                  <li>
                    <strong>Enterprise plan</strong>: 500 invocations per month
                    per user.
                  </li>
                </ul>
              </p>
              <h4 className='mt-6 fw-medium'>
                b. Data synchronization and real-time collaboration
              </h4>
              <p></p>
              <p>
                The data synchronization and real-time collaboration feature
                ("Synchronization Feature") is available to all our customers of
                our Pro plans. It is subject to the quotas specified in the plan
                details and visible in your{' '}
                <a href='/account/subscription/'>
                  account management interface
                </a>
                .
              </p>
              <p>
                We do not make any representation or warranty regarding the
                availability, performance, or functionality of the
                Synchronization Feature. The Synchronization Feature may be
                subject to downtime, errors, or interruptions, and we do not
                guarantee that it will be available at all times. We will make
                commercially reasonable efforts to ensure the availability and
                performance of the Synchronization Feature, and inform you of
                any planned maintenance or downtime through our Service status
                page.
              </p>
              <p>
                Aside from the above-mentioned quotas, the Synchronization
                Feature is subject to some technical limitations and monitoring,
                including but not limited to the maximum number of devices that
                can be synchronized from the same IP address, the maximum number
                of concurrent requests to our servers or the volume of data that
                can be transmitted over a certain period of time. These
                limitations are designed to ensure fair usage of our
                infrastructure and to prevent abuse or excessive load on our
                systems. We reserve the right to modify or adjust the technical
                limitations of the Synchronization Feature at any time. We
                further reserve the right to suspend or terminate your access to
                the Synchronization Feature if we determine that your usage is
                unreasonable or causing an undue burden on our infrastructure.
              </p>
              <p>
                While we take reasonable measures to ensure the durability and
                integrity of the data synchronized through the Synchronization
                Feature, it is not a backup service. We do not guarantee the
                retention or availability of your data. You are solely
                responsible for maintaining backups of your data and ensuring
                that you have the necessary copies of your data in the event of
                loss or corruption.
              </p>
              <h3 className='mt-6 fw-medium'>
                12. Usage quotas and limitations
              </h3>
              <p>
                Our Service may include certain usage quotas, such as storage,
                deployments, or AI assistant invocations, depending on the plan
                you have subscribed to. These usage quotas are provided to
                ensure fair usage of our services and to maintain the optimal
                performance of our infrastructure. They are visible in your{' '}
                <a href='/account/subscription/'>
                  account management interface
                </a>
                .
              </p>
              <p>
                The usage quotas allocated monthly to your account will reset at
                the beginning of each billing cycle. Unused quotas from the
                previous billing cycle will not be carried over to the next
                billing cycle.
              </p>
              <p>
                The usage quotas assigned to your account are personal and
                non-transferable. They cannot be shared, transferred, or
                combined with any other account, project, or user within or
                outside your organization.
              </p>
              <p>
                We reserve the right to modify or adjust the usage quotas at any
                time, subject to providing you with reasonable advance notice if
                such modifications or adjustments are likely to have a material
                adverse effect on the availability, performance, or
                functionality of the Service. Such modifications or adjustments
                may be communicated through written notice, email notifications,
                or by posting the updated quotas within our Service.
              </p>
              <h3 className='mt-6 fw-medium'>13. Priority support services</h3>
              <p>
                Support services are available for customers subscribed to the
                Pro and Enterprise plans of our Service. These plans include
                access to our support team for assistance with technical issues,
                inquiries, and general product-related questions.
              </p>
              <p>
                Support services are provided during regular business hours and
                working days in Luxembourg, unless otherwise specified in the
                plan details or separately agreed upon in writing. Our business
                hours are from{' '}
                <strong>
                  9 am to 5 pm, Monday to Friday, Luxembourg time (CET/CEST),
                  excluding public holidays in Luxembourg
                </strong>
                .
              </p>
              <p>
                The initial response time for support inquiries is as follows:
              </p>
              <ul>
                <li>
                  <strong>One business day</strong> for customers on the
                  Enterprise plan.
                </li>
                <li>
                  <strong>Two business days</strong> for customers on the Pro
                  plan.
                </li>
              </ul>
              <p>
                The support services encompass assistance and guidance regarding
                the functionality, features, and usage of our Service. Our
                support team will make commercially reasonable efforts to
                respond to your inquiries and provide prompt and accurate
                resolutions to the best of their knowledge and abilities.
              </p>
              <p>
                We do not make any representation or warranty to fix any
                potential bug, insufficiency, or malfunction of the Service, nor
                undertake any repairs to the Service. In the event of a reported
                bug, we will make reasonable efforts to provide a workaround or
                alternative solution while the bug is being addressed and fixed.
              </p>
              <p>
                While we strive to provide high-quality support services, we do
                not guarantee the resolution of every issue or the availability
                of immediate solutions. The timeframe for issue resolution may
                vary depending on the complexity and severity of the reported
                problem.
              </p>
              <p>
                The support service does not cover issues resulting from a
                hardware failure, customer error, neglect or negligence.
              </p>
              <p>
                The Support Service will be conducted through written means,
                which you can choose at your discretion. By default,
                communication will be made via email to support@mockoon.com.
                Please note that live audio or video calls are not included in
                the support service.
              </p>
              <p>
                Please note that support services do not cover assistance with
                custom development, integration, or consulting services unless
                expressly specified in the plan details or agreed upon
                separately in writing. Additional charges may apply for such
                services, and they will be subject to separate terms and
                conditions.
              </p>
              <p>
                We may update or modify the support services, including the
                channels of communication, availability, and response times, at
                our discretion. Any changes to the support services will be
                communicated to you through written notice or by posting updated
                information within our Service.
              </p>
              <h3 className='mt-6 fw-medium'>14. Welcome training</h3>
              <p>
                As part of our Enterprise plan, we offer a one hour online video
                call training session per company, per year. This training
                session is designed to help your company get started with our
                Service and provides a comprehensive overview of its features,
                functionalities, and best practices.
              </p>
              <p>
                After subscribing, a representative from our Company will reach
                out to you to coordinate the training session.
              </p>
              <h3 className='mt-6 fw-medium'>15. Term and termination</h3>
              <p>
                The term of this Agreement shall begin upon your acceptance of
                these terms of service and shall automatically renew for the
                same duration as the initially chosen plan, unless terminated by
                either party as outlined in this clause.
              </p>
              <p>
                You may terminate this Agreement at any time by providing
                written notice to us or by canceling your subscription in your
                account management interface.
              </p>
              <p>
                We may terminate this Agreement or suspend your access to our
                Service at any time, by providing you with a written notice at
                least 30 days in advance. However, in the event of a breach of
                this Agreement by you or non-payment of fees, we may terminate
                this Agreement or suspend your access with a written notice of
                10 days.
              </p>
              <p>
                Termination of this Agreement, whether initiated by you or us,
                will take effect at the end of the current billing cycle
                following the receipt of the termination notice. Upon
                termination, your access to our Service will be deactivated, and
                you will no longer have the right to use or access any data or
                information associated with your account. Please note that
                termination of this Agreement does not relieve you of the
                obligation to pay any outstanding fees accrued prior to the
                termination.
              </p>
              <p>
                Any provisions of this Agreement that by their nature extend
                beyond the termination or expiration of this Agreement shall
                survive and remain in effect, including but not limited to
                clauses relating to intellectual property rights, limitation of
                liability, indemnification, and dispute resolution.
              </p>
              <h3 className='mt-6 fw-medium'>16. Disclaimer</h3>
              <p>
                THE SERVICES AND SUPPORT SERVICES ARE PROVIDED "AS IS" AND THE
                COMPANY DISCLAIMS ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING,
                BUT NOT LIMITED TO, IMPLIED WARRANTIES OF MERCHANTABILITY AND
                FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. THE
                COMPANY DOES NOT WARRANT THAT THE SERVICES OR DELIVERABLES WILL
                BE UNINTERRUPTED OR ERROR FREE; NOR DOES IT MAKE ANY WARRANTY AS
                TO THE RESULTS THAT MAY BE OBTAINED FROM USE OF THE SERVICES OR
                DELIVERABLES.
              </p>
              <h3 className='mt-6 fw-medium'>
                17. Limit of Liability and Waiver of Consequential Damages.
              </h3>
              <p>
                TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, EXCEPT FOR
                YOUR BREACH OF SECTIONS 6 AND 10, OR YOUR BREACH OF ANY
                REPRESENTATIONS OR WARRANTIES OR YOUR INDEMNITY OBLIGATIONS,
                NEITHER PARTY NOR ITS SUPPLIERS (INCLUDING BUT NOT LIMITED TO
                ALL EQUIPMENT AND TECHNOLOGY SUPPLIERS), OFFICERS, AFFILIATES,
                REPRESENTATIVES, CONTRACTORS AND EMPLOYEES SHALL BE RESPONSIBLE
                OR LIABLE WITH RESPECT TO ANY SUBJECT MATTER OF THIS AGREEMENT
                OR TERMS AND CONDITIONS RELATED THERETO UNDER ANY CONTRACT,
                NEGLIGENCE, STRICT LIABILITY OR OTHER THEORY: (A) FOR ERROR OR
                INTERRUPTION OF USE OR FOR LOSS OR INACCURACY OR CORRUPTION OF
                DATA OR COST OF PROCUREMENT OF SUBSTITUTE GOODS, SERVICES OR
                TECHNOLOGY OR LOSS OF BUSINESS; (B) FOR ANY INDIRECT, SPECIAL,
                EXEMPLARY, INCIDENTAL, CONSEQUENTIAL OR PUNITIVE DAMAGES; OR (C)
                FOR ANY DIRECT DAMAGES, COSTS, LOSSES, OF LIABILITIES IN AMOUNTS
                THAT, TOGETHER WITH AMOUNTS ASSOCIATED WITH ALL OTHER CLAIMS,
                EXCEED THE GREATER OF ONE HUNDRED DOLLARS AND THE FEES PAID BY
                YOU TO THE COMPANY FOR THE SERVICES UNDER THIS AGREEMENT IN THE
                6 MONTHS PRIOR TO THE ACT THAT GAVE RISE TO THE LIABILITY, IN
                EACH CASE, WHETHER OR NOT SUCH PARTY HAS BEEN ADVISED OF THE
                POSSIBILITY OF SUCH DAMAGES. THE PROVISIONS OF THIS SECTION
                ALLOCATE THE RISKS UNDER THIS AGREEMENT BETWEEN THE PARTIES, AND
                THE PARTIES HAVE RELIED ON THESE LIMITATIONS IN DETERMINING
                WHETHER TO ENTER THIS AGREEMENT.
              </p>
              <h3 className='mt-6 fw-medium'>18. Miscellaneous</h3>
              <p>
                This Agreement, including its terms and conditions, may be
                updated or modified by us from time to time. Any updates or
                modifications will be communicated to you through written
                notice, which may include email notifications or posting the
                revised Agreement within our Service. The updated Agreement
                shall enter into force immediately upon notification.
              </p>
              <p>
                By continuing to use our Service after the updated Agreement has
                been notified, you acknowledge and agree that you have read,
                understood, and accepted the revised terms and conditions. If
                you do not agree with any changes made to this Agreement, it is
                your responsibility to stop using our Service.
              </p>
              <p>
                You understand and acknowledge that it is your obligation to
                regularly review this Agreement to stay informed about any
                updates or modifications. We encourage you to periodically visit
                our website or the Service itself to access the most current
                version of the Agreement.
              </p>
              <p>
                Any failure or delay by us in exercising any right, power, or
                remedy under this Agreement shall not operate as a waiver
                thereof. The waiver of any breach or violation of any provision
                of this Agreement shall not constitute a waiver of any
                subsequent breach or violation.
              </p>
              <p>
                If any provision of this Agreement is found to be invalid,
                illegal, or unenforceable, the remaining provisions shall
                continue to be valid and enforceable to the fullest extent
                permitted by law.
              </p>
              <p>
                This Agreement constitutes the entire understanding and
                agreement between you and us regarding the subject matter herein
                and supersedes any prior or contemporaneous agreements,
                communications, or understandings, whether written or oral,
                relating to such subject matter.
              </p>
              <h3 className='mt-6 fw-medium'>19. Governing law</h3>
              <p>
                This Agreement and any dispute arising out of or in connection
                with this Agreement shall be governed by and construed in
                accordance with the laws of Luxembourg without regard to its
                conflict of laws provisions.
              </p>
              <p>
                Any legal action, suit, or proceeding arising out of or relating
                to this Agreement shall be brought exclusively in the competent
                courts of Luxembourg. You hereby consent to the jurisdiction and
                venue of such courts and waive any objections to the exercise of
                personal jurisdiction over you by such courts.
              </p>
              <h3 className='mt-6 fw-medium'>20. Binding agreement</h3>
              <p>
                This Agreement constitutes a binding contract between you and
                us. You may not assign or transfer any rights or obligations
                under this Agreement without our prior written consent. We may
                assign or transfer our rights and obligations under this
                Agreement to any third party without your consent.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Terms;
