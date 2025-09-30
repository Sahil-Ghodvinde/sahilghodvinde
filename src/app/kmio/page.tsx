'use client'

import React from 'react'
import Image from 'next/image'
import { BookOpenIcon, ComputerDesktopIcon, LightBulbIcon, ArrowDownIcon, CodeBracketIcon, ServerIcon, CpuChipIcon, CloudArrowUpIcon, ArrowPathRoundedSquareIcon, ChartBarIcon, ClockIcon, CurrencyDollarIcon, UserGroupIcon, DocumentTextIcon, ArrowRightIcon, CheckCircleIcon, ArrowPathIcon, ScaleIcon, ArrowTopRightOnSquareIcon, ClockIcon as ClockIconSolid, ChartBarIcon as ChartBarIconSolid, UserGroupIcon as UserGroupIconSolid, ShieldCheckIcon, ShieldCheckIcon as ShieldCheckIconSolid, Cog6ToothIcon } from '@heroicons/react/24/outline'
import Sidebar from '@/components/Sidebar'

interface WorkflowStep {
  title: string;
  description: string;
}

const workflowSteps: WorkflowStep[] = [
  {
    title: "Digital Twin of Yard",
    description: "Creates an exact digital map of the Muttom yard, including slots, switches, and travel times."
  },
  {
    title: "Constraint Engine",
    description: "Automatically applies must-follow rules (like certificate expiries and critical job-cards) to flag ineligible train rakes."
  },
  {
    title: "Multi-Objective Optimiser",
    description: "Scores eligible trains based on reliability, shunt cost, branding exposure, and mileage to generate a ranked, optimal induction list."
  },
  {
    title: "Simulation & What-Ifs",
    description: "Simulates the entire plan (shunt sequence, timing) and provides instant swap alternatives with clear impact numbers."
  },
  {
    title: "Machine Learning Loop",
    description: "Continuously learns from past operational data (withdrawals, job durations, shunt times) to improve future predictions and scores."
  }
];

const SIH2025Page: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-black relative">
      <Sidebar currentPage="home" />
      {/* Main Content */}
      <div className="min-h-screen flex flex-col">
        {/* Header */}
        <header className="bg-white py-4 px-6 shadow-sm sticky top-0 z-10 ml-14">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <div className="relative w-24 h-10">
                <Image 
                  src="/Kmio_logo.png" 
                  alt="KMIO Logo" 
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <div className="text-xs">
                <div>Kochi Metro Induction Optimizer</div>
                <div className="text-gray-500">By Team Devkstra</div>
              </div>
            </div>
            <div className="hidden md:flex items-center bg-[#F5F7FA] px-4 py-2 rounded-full">
              <LightBulbIcon className="h-5 w-5 text-[#00B0B4] mr-2" />
              <span className="font-semibold text-sm">SMART INDIA HACKATHON 2025</span>
            </div>
          </div>
        </header>

      <main>
        {/* Hero Section */}
        <div className="relative h-[350px] w-full">
          <Image
            src="/img1.png"
            alt="Kochi Metro Train"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/70" />
          <div className="relative z-10 h-full flex flex-col justify-center items-center px-4">
            <div className="relative w-[300px] h-[200px] md:w-[400px] md:h-[250px]">
              <Image
                src="/Kmio_logo.png"
                alt="KMIO Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>

        {/* Video and PDF Section */}
        <section className="py-12 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* YouTube Video Embed */}
              <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-md">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/smLM_E_oIG4?autoplay=1&mute=1"
                  title="KMIO Demo Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              
              {/* PDF Cover with View Button */}
              <div className="relative group w-[280px] h-[400px] rounded-lg overflow-hidden shadow-md bg-gray-100 mx-auto">
                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(/DPR.png)' }}>
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                    <a 
                      href="/reports/SIH_2025_DPR.pdf" 
                      target="_blank"
                      rel="noopener noreferrer"
                      download
                      className="px-6 py-3 bg-[#00B0B4] hover:bg-[#008a8e] text-white font-medium rounded-full shadow-lg transform transition-all duration-300 group-hover:scale-105 flex items-center space-x-2"
                      onClick={(e) => {
                        // This will ensure the PDF opens in a new tab after download starts
                        e.preventDefault();
                        const link = document.createElement('a');
                        link.href = '/reports/SIH_2025_DPR.pdf';
                        link.target = '_blank';
                        link.download = 'SIH_2025_DPR.pdf';
                        document.body.appendChild(link);
                        link.click();
                        document.body.removeChild(link);
                      }}
                    >
                      <span>View DPR</span>
                      <ArrowTopRightOnSquareIcon className="h-5 w-5" />
                    </a>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 text-white">
                  <h3 className="text-xl font-semibold">Project DPR</h3>
                  <p className="text-sm opacity-90">Detailed Project Report</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Content Sections */}
        <div className="space-y-0">
          {/* Proposed Solution */}
          <section className="py-16 px-4 bg-[#F5F7FA]">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-[#00B0B4] mb-6">Proposed Solution</h2>
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <p className="text-lg text-gray-800 leading-relaxed">
                  <span className="font-semibold text-[#00B0B4]">KMIO</span> is an AI-powered solution that transforms the nightly induction process at Kochi Metro&apos;s Muttom Yard. By leveraging digital twin technology, constraint-based optimization, and machine learning, KMIO automates the complex decision-making process of selecting which train rakes to induct for maintenance, ensuring optimal yard operations while considering multiple constraints and objectives.
                </p>
              </div>
            </div>
          </section>

          {/* Workflow Section */}
          <section className="py-16 px-4 bg-white">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center text-[#2D3748] mb-12">
                KMIO PROPOSED NIGHTLY INDUCTION WORKFLOW
              </h2>
              
              <div className="relative grid grid-cols-1 md:grid-cols-5 gap-8">
                {workflowSteps.map((step, index) => (
                  <div key={index} className="relative z-10 flex flex-col items-center text-center">
                    <div className="w-20 h-20 rounded-full border-4 border-[#00B0B4] flex items-center justify-center bg-white mb-4 relative">
                      {index === 0 && <BookOpenIcon className="h-8 w-8 text-[#00B0B4]" />}
                      {index === 1 && <Cog6ToothIcon className="h-8 w-8 text-[#00B0B4]" />}
                      {index === 2 && <ComputerDesktopIcon className="h-8 w-8 text-[#00B0B4]" />}
                      {index >= 3 && <LightBulbIcon className="h-8 w-8 text-[#00B0B4]" />}
                      
                      {index < workflowSteps.length - 1 && (
                        <>
                          <div className="hidden md:block absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-1/2 w-16 h-1 bg-[#00B0B4] z-0"></div>
                          <ArrowRightIcon className="hidden md:block absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-1/2 h-6 w-6 text-[#00B0B4] bg-white rounded-full p-0.5 z-10" />
                        </>
                      )}
                    </div>
                    <div className="bg-[#006666] text-white p-4 rounded-lg w-full relative">
                      <h3 className="font-bold text-white mb-2">{step.title}</h3>
                      <p className="text-sm text-gray-200">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Technical Approach */}
          <section className="py-16 px-4 bg-white">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center text-[#2D3748] mb-12">
                TECHNICAL APPROACH
              </h2>
              
              {/* Technologies to be Used */}
              <div className="mb-12">
                <h3 className="text-2xl font-semibold text-[#00B0B4] mb-6">Technologies to be Used</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-[#F5F7FA] p-6 rounded-lg">
                    <div className="flex items-center mb-4">
                      <CodeBracketIcon className="h-6 w-6 text-[#00B0B4] mr-2" />
                      <h4 className="font-semibold">Programming</h4>
                    </div>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Python</li>
                      <li>• TypeScript</li>
                      <li>• SQL</li>
                    </ul>
                  </div>
                  
                  <div className="bg-[#F5F7FA] p-6 rounded-lg">
                    <div className="flex items-center mb-4">
                      <ServerIcon className="h-6 w-6 text-[#00B0B4] mr-2" />
                      <h4 className="font-semibold">Backend</h4>
                    </div>
                    <ul className="space-y-2 text-gray-700">
                      <li>• FastAPI</li>
                      <li>• Django</li>
                      <li>• Celery</li>
                    </ul>
                  </div>
                  
                  <div className="bg-[#F5F7FA] p-6 rounded-lg">
                    <div className="flex items-center mb-4">
                      <ComputerDesktopIcon className="h-6 w-6 text-[#00B0B4] mr-2" />
                      <h4 className="font-semibold">Frontend</h4>
                    </div>
                    <ul className="space-y-2 text-gray-700">
                      <li>• React</li>
                      <li>• Next.js</li>
                      <li>• Tailwind CSS</li>
                    </ul>
                  </div>
                  
                  <div className="bg-[#F5F7FA] p-6 rounded-lg">
                    <div className="flex items-center mb-4">
                      <CpuChipIcon className="h-6 w-6 text-[#00B0B4] mr-2" />
                      <h4 className="font-semibold">Database</h4>
                    </div>
                    <ul className="space-y-2 text-gray-700">
                      <li>• PostgreSQL</li>
                      <li>• TimescaleDB</li>
                      <li>• Redis</li>
                    </ul>
                  </div>
                  
                  <div className="bg-[#F5F7FA] p-6 rounded-lg">
                    <div className="flex items-center mb-4">
                      <CloudArrowUpIcon className="h-6 w-6 text-[#00B0B4] mr-2" />
                      <h4 className="font-semibold">API</h4>
                    </div>
                    <ul className="space-y-2 text-gray-700">
                      <li>• REST</li>
                      <li>• GraphQL</li>
                      <li>• WebSockets</li>
                    </ul>
                  </div>
                  
                  <div className="bg-[#F5F7FA] p-6 rounded-lg">
                    <div className="flex items-center mb-4">
                      <ArrowPathRoundedSquareIcon className="h-6 w-6 text-[#00B0B4] mr-2" />
                      <h4 className="font-semibold">IoT & Cloud</h4>
                    </div>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Docker</li>
                      <li>• Kubernetes</li>
                      <li>• AWS/GCP</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              {/* Technical Flow */}
              <div className="mb-12">
                <h3 className="text-2xl font-semibold text-[#00B0B4] mb-6">Technical Flow</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="bg-[#F5F7FA] p-6 rounded-lg">
                    <div className="flex items-center mb-4">
                      <div className="bg-[#00B0B4] text-white p-2 rounded-full mr-3">
                        <ChartBarIcon className="h-5 w-5" />
                      </div>
                      <h4 className="font-semibold text-lg">Data Integration</h4>
                    </div>
                    <p className="text-gray-700">Integration with existing systems and data sources to collect real-time data on train status, maintenance schedules, and yard operations.</p>
                  </div>
                  
                  <div className="bg-[#F5F7FA] p-6 rounded-lg relative">
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#00B0B4] text-white px-3 py-1 rounded-full text-sm">
                      Core Engine
                    </div>
                    <div className="flex items-center mb-4 mt-2">
                      <div className="bg-[#00B0B4] text-white p-2 rounded-full mr-3">
                        <Cog6ToothIcon className="h-5 w-5" />
                      </div>
                      <h4 className="font-semibold text-lg">Optimisation Engine</h4>
                    </div>
                    <p className="text-gray-700">Advanced algorithms to process constraints and objectives, generating optimal induction plans using machine learning and optimization techniques.</p>
                  </div>
                  
                  <div className="bg-[#F5F7FA] p-6 rounded-lg">
                    <div className="flex items-center mb-4">
                      <div className="bg-[#00B0B4] text-white p-2 rounded-full mr-3">
                        <ComputerDesktopIcon className="h-5 w-5" />
                      </div>
                      <h4 className="font-semibold text-lg">Dashboard</h4>
                    </div>
                    <p className="text-gray-700">Intuitive interface for operators to view recommendations, make adjustments, and monitor the execution of the induction plan.</p>
                  </div>
                </div>
              </div>
              
              {/* Scoring Formula */}
              <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
                <h3 className="text-2xl font-semibold text-[#00B0B4] mb-6">Scoring Formula</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-[#F5F7FA] p-4 rounded-lg">
                    <div className="flex items-center mb-2">
                      <ClockIcon className="h-5 w-5 text-[#00B0B4] mr-2" />
                      <h4 className="font-semibold">Readiness (40%)</h4>
                    </div>
                    <p className="text-sm text-gray-700">Based on maintenance due dates and critical jobs</p>
                  </div>
                  
                  <div className="bg-[#F5F7FA] p-4 rounded-lg">
                    <div className="flex items-center mb-2">
                      <CurrencyDollarIcon className="h-5 w-5 text-[#00B0B4] mr-2" />
                      <h4 className="font-semibold">Shunt (30%)</h4>
                    </div>
                    <p className="text-sm text-gray-700">Minimizing movement time and complexity</p>
                  </div>
                  
                  <div className="bg-[#F5F7FA] p-4 rounded-lg">
                    <div className="flex items-center mb-2">
                      <UserGroupIcon className="h-5 w-5 text-[#00B0B4] mr-2" />
                      <h4 className="font-semibold">Branding (15%)</h4>
                    </div>
                    <p className="text-sm text-gray-700">Maximizing train visibility and exposure</p>
                  </div>
                  
                  <div className="bg-[#F5F7FA] p-4 rounded-lg">
                    <div className="flex items-center mb-2">
                      <DocumentTextIcon className="h-5 w-5 text-[#00B0B4] mr-2" />
                      <h4 className="font-semibold">Mileage (15%)</h4>
                    </div>
                    <p className="text-sm text-gray-700">Balancing usage across the fleet</p>
                  </div>
                </div>
                
                <div className="bg-[#006666] text-white p-6 rounded-lg">
                  <div className="text-center">
                    <h4 className="text-xl font-semibold mb-2">Final Score</h4>
                    <p className="text-2xl font-bold mb-4">
                      = 0.4 × Readiness + 0.3 × Shunt + 0.15 × Branding + 0.15 × Mileage
                    </p>
                    <div className="text-sm text-gray-200">
                      <p>• Normalized to 0-1 scale for each component</p>
                      <p>• Achieves 98% constraint satisfaction in testing</p>
                      <p>• Reduces decision time from 2 hours to under 5 minutes</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Key Features */}
              <div className="mt-16">
                <h3 className="text-2xl font-semibold text-[#00B0B4] mb-8 text-center">Key Features</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                    <div className="flex items-start">
                      <div className="bg-[#00B0B4] p-2 rounded-full mr-4 flex-shrink-0">
                        <CheckCircleIcon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg mb-2">Constraint Engine</h4>
                        <p className="text-gray-700">Automatically flags ineligible trains based on must-follow rules and certificate expiries.</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                    <div className="flex items-start">
                      <div className="bg-[#00B0B4] p-2 rounded-full mr-4 flex-shrink-0">
                        <ArrowPathIcon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg mb-2">Multi-Objective Optimizer</h4>
                        <p className="text-gray-700">Scores eligible trains based on multiple factors to generate an optimal induction list.</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                    <div className="flex items-start">
                      <div className="bg-[#00B0B4] p-2 rounded-full mr-4 flex-shrink-0">
                        <ScaleIcon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg mb-2">What-If Simulation</h4>
                        <p className="text-gray-700">Allows operators to simulate different scenarios and see the impact on operations.</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                    <div className="flex items-start">
                      <div className="bg-[#00B0B4] p-2 rounded-full mr-4 flex-shrink-0">
                        <ChartBarIconSolid className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg mb-2">Machine Learning</h4>
                        <p className="text-gray-700">Continuously improves predictions based on historical data and operational feedback.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Key Benefits */}
              <div className="mt-16">
                <h3 className="text-2xl font-semibold text-[#00B0B4] mb-8 text-center">Key Benefits</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-[#F5F7FA] p-6 rounded-lg text-center">
                    <div className="bg-[#00B0B4] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <ClockIconSolid className="h-8 w-8 text-white" />
                    </div>
                    <h4 className="font-semibold text-lg mb-2">Reduced Decision Time</h4>
                    <p className="text-gray-700">Cuts down decision-making time from 2 hours to under 5 minutes.</p>
                  </div>
                  
                  <div className="bg-[#F5F7FA] p-6 rounded-lg text-center">
                    <div className="bg-[#00B0B4] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <ShieldCheckIconSolid className="h-8 w-8 text-white" />
                    </div>
                    <h4 className="font-semibold text-lg mb-2">98% Constraint Satisfaction</h4>
                    <p className="text-gray-700">Ensures compliance with all operational constraints and rules.</p>
                  </div>
                  
                  <div className="bg-[#F5F7FA] p-6 rounded-lg text-center">
                    <div className="bg-[#00B0B4] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <UserGroupIconSolid className="h-8 w-8 text-white" />
                    </div>
                    <h4 className="font-semibold text-lg mb-2">Improved Resource Utilization</h4>
                    <p className="text-gray-700">Optimizes yard operations and resource allocation for maximum efficiency.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>



          {/* Key Metrics */}
          <section className="py-16 px-4 bg-white">
            <div className="max-w-4xl mx-auto text-center">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="p-6">
                  <div className="text-3xl font-bold text-[#00B0B4] mb-2">15-20%</div>
                  <div className="text-lg text-gray-700">Shunt Time</div>
                  <div className="flex justify-center mt-2">
                    <ArrowDownIcon className="h-6 w-6 text-green-500" />
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-3xl font-bold text-[#00B0B4] mb-2">10-12%</div>
                  <div className="text-lg text-gray-700">Unplanned maintenance</div>
                  <div className="flex justify-center mt-2">
                    <ArrowDownIcon className="h-6 w-6 text-green-500" />
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-3xl font-bold text-[#00B0B4] mb-2">8-10%</div>
                  <div className="text-lg text-gray-700">Annual O&M costs</div>
                  <div className="flex justify-center mt-2">
                    <ArrowDownIcon className="h-6 w-6 text-green-500" />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#006666] text-white py-8 px-4 mt-auto">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <div className="font-bold text-2xl mr-4">
                <span className="text-[#00B0B4]">KM</span>
                <span className="text-[#ADD844]">IO</span>
              </div>
              <p className="text-sm max-w-md">
                KMIO transforms nightly induction into an auditable, yard-aware, AI-assisted decision process that ensures compliance, optimizes resources, and delivers measurable operational benefits.
              </p>
            </div>
            <div className="text-sm">
              <p>Page 2</p>
            </div>
          </div>
        </div>
      </footer>
      </div>
    </div>
  );
};

export default SIH2025Page;