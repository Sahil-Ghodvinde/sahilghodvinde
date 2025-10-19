'use client'

import React from 'react'
import Image from 'next/image'
import { BookOpenIcon, ComputerDesktopIcon, LightBulbIcon, ArrowDownIcon, CodeBracketIcon, ServerIcon, CpuChipIcon, CloudArrowUpIcon, ArrowPathRoundedSquareIcon, ChartBarIcon, ClockIcon, CurrencyDollarIcon, UserGroupIcon, DocumentTextIcon, ArrowRightIcon, CheckCircleIcon, ArrowPathIcon, ScaleIcon, ArrowTopRightOnSquareIcon, ClockIcon as ClockIconSolid, ChartBarIcon as ChartBarIconSolid, UserGroupIcon as UserGroupIconSolid, ShieldCheckIcon as ShieldCheckIconSolid, Cog6ToothIcon } from '@heroicons/react/24/outline'
import Sidebar from '@/components/SideBar_BSLO'

interface WorkflowStep {
  title: string;
  description: string;
}

const workflowSteps: WorkflowStep[] = [
  {
    title: "Data Collection & Order Pooling",
    description: "Gathers real-time data on product types, stockyard inventory, and rake availability."
  },
  {
    title: "Rake Formation",
    description: "Combines orders with available rakes, intelligently filling wagons based on shared routes and destinations."
  },
  {
    title: "Plan Generation",
    description: "Creates a plan only when it meets rake capacity, available stockyard inventory, and dispatch deadlines."
  },
  {
    title: "Scoring Engine",
    description: "Ranks feasible plans, evaluating cost, efficiency, and resource utilization."
  },
  {
    title: "Final Output",
    description: "Delivers the optimal dispatch plan."
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
                  src="/bslo.png" 
                  alt="BSLO Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <div className="text-xs">
                <div>Bokaro Steel Logistics Optimizer</div>
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
            src="/bslo_bg2.png"
            alt="Bokaro Steel Logistics Optimizer"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/70" />
          <div className="relative z-10 h-full flex flex-col justify-center items-center px-4">
            <div className="relative w-[300px] h-[200px] md:w-[400px] md:h-[250px]">
              {/* <Image
                src="/bslo.png.png"
                alt="bslo.png Logo"
                fill
                className="object-contain"
                priority
              /> */}
            </div>
          </div>
        </div>
{/* https://youtu.be/TgFiyaS_cOg */}
        {/* Video and PDF Section */}
        <section className="py-12 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* YouTube Video Embed */}
              <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-md">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/TgFiyaS_cOg?autoplay=1&mute=1"
                  title="bslo.png Demo Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              
              {/* PDF Cover with View Button */}
              <div className="relative group w-[280px] h-[400px] rounded-lg overflow-hidden shadow-md bg-gray-100 mx-auto">
                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(/bslo_dpr.png)' }}>
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                    <a 
                      href="/reports/BSLO_SIH_2025_DPR.pdf" 
                      target="_blank"
                      rel="noopener noreferrer"
                      download
                      className="px-6 py-3 bg-[#00B0B4] hover:bg-[#008a8e] text-white font-medium rounded-full shadow-lg transform transition-all duration-300 group-hover:scale-105 flex items-center space-x-2"
                      onClick={(e) => {
                        // This will ensure the PDF opens in a new tab after download starts
                        e.preventDefault();
                        const link = document.createElement('a');
                        link.href = '/reports/BSLO_SIH_2025_DPR.pdf';
                        link.target = '_blank';
                        link.download = 'BSLO_SIH_2025_DPR.pdf';
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
                  <span className="font-semibold text-[#00B0B4]">BSLO</span> is a Decision Support System that automates and optimizes rake formation at Bokaro Steel Plant uses real-time data to generate cost-effective, high-utility dispatch plans.
                </p>
              </div>
            </div>
          </section>

          {/* Workflow Section */}
          <section className="py-16 px-4 bg-white">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center text-[#2D3748] mb-12">
                BSLO Proposed Workflow
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
                                <h4 className="font-semibold">Web Dashboard & Backend</h4>
                              </div>
                              <ul className="space-y-2 text-gray-700">
                                <li>• React.js</li>
                                <li>• REST APIs</li>
                                <li>• Node.js / Express.js</li>
                                <li>• AWS Cloud</li>
                              </ul>
                            </div>
                            
                            <div className="bg-[#F5F7FA] p-6 rounded-lg">
                              <div className="flex items-center mb-4">
                                <ServerIcon className="h-6 w-6 text-[#00B0B4] mr-2" />
                                <h4 className="font-semibold">Optimization Core</h4>
                              </div>
                              <ul className="space-y-2 text-gray-700">
                                <li>• Greedy heuristics</li>
                                <li>• Knapsack models</li>
                                <li>• Linear programming</li>
                                <li>• OR-Tools</li>
                              </ul>
                            </div>
                            
                            <div className="bg-[#F5F7FA] p-6 rounded-lg">
                              <div className="flex items-center mb-4">
                                <ComputerDesktopIcon className="h-6 w-6 text-[#00B0B4] mr-2" />
                                <h4 className="font-semibold">Math/Science Libraries</h4>
                              </div>
                              <ul className="space-y-2 text-gray-700">
                                <li>• PuLP</li>
                                <li>• SciPy</li>
                              </ul>
                            </div>
                            
                            <div className="bg-[#F5F7FA] p-6 rounded-lg">
                              <div className="flex items-center mb-4">
                                <CpuChipIcon className="h-6 w-6 text-[#00B0B4] mr-2" />
                                <h4 className="font-semibold">Data & Storage</h4>
                              </div>
                              <ul className="space-y-2 text-gray-700">
                                <li>• PostgreSQL</li>
                                <li>• Amazon S3 (data lake)</li>
                                <li>• Redis (caching)</li>
                              </ul>
                            </div>
                            
                            <div className="bg-[#F5F7FA] p-6 rounded-lg">
                              <div className="flex items-center mb-4">
                                <CloudArrowUpIcon className="h-6 w-6 text-[#00B0B4] mr-2" />
                                <h4 className="font-semibold">APIs & Integrations</h4>
                              </div>
                              <ul className="space-y-2 text-gray-700">
                                <li>• REST integrations</li>
                                <li>• Order, inventory, rake availability feeds</li>
                                <li>• Operational constraints & SLA inputs</li>
                              </ul>
                            </div>
                            
                            <div className="bg-[#F5F7FA] p-6 rounded-lg">
                              <div className="flex items-center mb-4">
                                <ArrowPathRoundedSquareIcon className="h-6 w-6 text-[#00B0B4] mr-2" />
                                <h4 className="font-semibold">Deployment & Ops</h4>
                              </div>
                              <ul className="space-y-2 text-gray-700">
                                <li>• AWS Cloud</li>
                                <li>• Docker</li>
                                <li>• CI/CD</li>
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
                                <h4 className="font-semibold text-lg">Order Intake + Pooling & Clustering</h4>
                              </div>
                              <p className="text-gray-700">Capture and validate orders; group by region, material, and due date to form logical pools for planning.</p>
                            </div>
                            
                            <div className="bg-[#F5F7FA] p-6 rounded-lg relative">
                              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#00B0B4] text-white px-3 py-1 rounded-full text-sm">
                                Core Engine
                              </div>
                              <div className="flex items-center mb-4 mt-2">
                                <div className="bg-[#00B0B4] text-white p-2 rounded-full mr-3">
                                  <Cog6ToothIcon className="h-5 w-5" />
                                </div>
                                <h4 className="font-semibold text-lg">Sorting, Allocation & Plan Generation</h4>
                              </div>
                              <p className="text-gray-700">Priority-based sorting and knapsack + greedy packing to create candidate plans; assign wagons, check capacity and siding limits; generate feasible rake plans.</p>
                            </div>
                            
                            <div className="bg-[#F5F7FA] p-6 rounded-lg">
                              <div className="flex items-center mb-4">
                                <div className="bg-[#00B0B4] text-white p-2 rounded-full mr-3">
                                  <ComputerDesktopIcon className="h-5 w-5" />
                                </div>
                                <h4 className="font-semibold text-lg">Scoring Engine + Output & Dashboard</h4>
                              </div>
                              <p className="text-gray-700">Score plans on cost, time/SLA, utilization, and priority; publish the optimized dispatch plan to the dashboard with schedule and fulfillment view.</p>
                            </div>
                          </div>
                        </div>
                        
                        {/* Scoring Formula */}
                        <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
                          <h3 className="text-2xl font-semibold text-[#00B0B4] mb-6">Scoring Engine</h3>
                          
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                            <div className="bg-[#F5F7FA] p-4 rounded-lg">
                              <div className="flex items-center mb-2">
                                <ClockIcon className="h-5 w-5 text-[#00B0B4] mr-2" />
                                <h4 className="font-semibold">Cost Factor</h4>
                              </div>
                              <p className="text-sm text-gray-700">Minimizes transport and penalty/demurrage costs.</p>
                            </div>
                            
                            <div className="bg-[#F5F7FA] p-4 rounded-lg">
                              <div className="flex items-center mb-2">
                                <CurrencyDollarIcon className="h-5 w-5 text-[#00B0B4] mr-2" />
                                <h4 className="font-semibold">Time Factor</h4>
                              </div>
                              <p className="text-sm text-gray-700">Ensures SLA compliance and timely deliveries.</p>
                            </div>
                            
                            <div className="bg-[#F5F7FA] p-4 rounded-lg">
                              <div className="flex items-center mb-2">
                                <UserGroupIcon className="h-5 w-5 text-[#00B0B4] mr-2" />
                                <h4 className="font-semibold">Utilization Factor</h4>
                              </div>
                              <p className="text-sm text-gray-700">Avoids half‑empty rakes and maximizes load utilization.</p>
                            </div>
                            
                            <div className="bg-[#F5F7FA] p-4 rounded-lg">
                              <div className="flex items-center mb-2">
                                <DocumentTextIcon className="h-5 w-5 text-[#00B0B4] mr-2" />
                                <h4 className="font-semibold">Priority Factor</h4>
                              </div>
                              <p className="text-sm text-gray-700">Ranks high‑priority customer orders higher in candidate plans.</p>
                            </div>
                          </div>
                          
                          <div className="bg-[#006666] text-white p-6 rounded-lg">
                            <div className="text-center">
                              <h4 className="text-xl font-semibold mb-2">Final Score</h4>
                              <p className="text-2xl font-bold mb-4">
                                = w1×Cost + w2×Time + w3×Utilization + w4×Priority
                              </p>
                              <div className="text-sm text-gray-200">
                                <p>• All factors normalized (0–1); weights tuned for cost, SLA, and utilization goals.</p>
                                <p>• Constraints checked for rake capacity, loading point/siding limits, and route rules.</p>
                                <p>• Best‑scoring feasible plan published to Output & Dashboard.</p>
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
                                  <h4 className="font-semibold text-lg mb-2">Order Intake & Validation</h4>
                                  <p className="text-gray-700">Capture orders and validate quantities, destinations, due dates, and product–wagon compatibility.</p>
                                </div>
                              </div>
                            </div>
                            
                            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                              <div className="flex items-start">
                                <div className="bg-[#00B0B4] p-2 rounded-full mr-4 flex-shrink-0">
                                  <ArrowPathIcon className="h-6 w-6 text-white" />
                                </div>
                                <div>
                                  <h4 className="font-semibold text-lg mb-2">Pooling & Clustering</h4>
                                  <p className="text-gray-700">Group orders by region, material, and due date to enable efficient candidate plan generation.</p>
                                </div>
                              </div>
                            </div>
                            
                            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                              <div className="flex items-start">
                                <div className="bg-[#00B0B4] p-2 rounded-full mr-4 flex-shrink-0">
                                  <ScaleIcon className="h-6 w-6 text-white" />
                                </div>
                                <div>
                                  <h4 className="font-semibold text-lg mb-2">Candidate Plans (Knapsack + Greedy)</h4>
                                  <p className="text-gray-700">Priority sorting and packing strategies to create high‑quality candidates under capacity and routing rules.</p>
                                </div>
                              </div>
                            </div>
                            
                            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                              <div className="flex items-start">
                                <div className="bg-[#00B0B4] p-2 rounded-full mr-4 flex-shrink-0">
                                  <ChartBarIconSolid className="h-6 w-6 text-white" />
                                </div>
                                <div>
                                  <h4 className="font-semibold text-lg mb-2">Rake Allocation, Scoring & Dashboard</h4>
                                  <p className="text-gray-700">Assign wagons, check capacity and siding limits, score on cost/time/utilization/priority, and publish the optimized plan.</p>
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
                    <h4 className="font-semibold text-lg mb-2">Strategic Logistics Command</h4>
                    <p className="text-gray-700">Real-time KPI visibility, ML‑driven forecasting, and a scalable framework.</p>
                  </div>
                  
                  <div className="bg-[#F5F7FA] p-6 rounded-lg text-center">
                    <div className="bg-[#00B0B4] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <ShieldCheckIconSolid className="h-8 w-8 text-white" />
                    </div>
                    <h4 className="font-semibold text-lg mb-2">AI‑Assisted Yard Operations</h4>
                    <p className="text-gray-700">Automated workflows with real‑time validation for intelligent, error‑free execution.</p>
                  </div>
                  
                  <div className="bg-[#F5F7FA] p-6 rounded-lg text-center">
                    <div className="bg-[#00B0B4] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <UserGroupIconSolid className="h-8 w-8 text-white" />
                    </div>
                    <h4 className="font-semibold text-lg mb-2">Customer & Dispatch Excellence</h4>
                    <p className="text-gray-700">Faster order turnaround, 98% SLA compliance, fewer delays and near‑zero misrouting.</p>
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
                  <div className="text-3xl font-bold text-[#00B0B4] mb-2">15-25%</div>
                  <div className="text-lg text-gray-700">Better Rake Utilization</div>
                  <div className="flex justify-center mt-2">
                    <ArrowDownIcon className="h-6 w-6 text-green-500" />
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-3xl font-bold text-[#00B0B4] mb-2">20-30%</div>
                  <div className="text-lg text-gray-700">Reduction in Planning Time</div>
                  <div className="flex justify-center mt-2">
                    <ArrowDownIcon className="h-6 w-6 text-green-500" />
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-3xl font-bold text-[#00B0B4] mb-2">Up to ₹12Cr</div>
                  <div className="text-lg text-gray-700">Annual Savings</div>
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
                <span className="text-[#00B0B4]">BS</span>
                <span className="text-[#ADD844]">LO</span>
              </div>
              <p className="text-sm max-w-md">
                BSLO transforms current manual task management into an auditable, AI-assisted decision process that ensures compliance, optimizes resources, and delivers measurable operational benefits.
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