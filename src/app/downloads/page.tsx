"use client";

import { useState } from 'react';
import Link from 'next/link';

interface ResourceDoc {
  id: string;
  title: string;
  modelCode: string;
  brand: string;
  category: 'datasheet' | 'manual' | 'brochure' | 'certificate' | 'firmware' | 'cad';
  categoryLabel: string;
  fileType: 'PDF' | 'ZIP' | 'DWG' | 'EXE';
  fileSize: string;
  version: string;
  releaseDate: string;
  downloadsCount: number;
  downloadUrl: string;
  description: string;
  compatibility: string[];
}

const PRESS_RELEASES = [
  {
    title: "Soltronic Energy Q2 2026 Financial & Operational Highlights",
    date: "July 30, 2026",
    size: "2.4 MB",
    type: "PDF Document"
  },
  {
    title: "Whitepaper: Commercial & Industrial Energy Storage ROI Framework",
    date: "July 15, 2026",
    size: "4.1 MB",
    type: "PDF Document"
  },
  {
    title: "Soltronic Tier-1 Inverter & Module Compatibility Matrix 2026",
    date: "June 10, 2026",
    size: "1.8 MB",
    type: "PDF Document"
  }
];

const RESOURCES: ResourceDoc[] = [
  {
    id: 'doc-1',
    title: 'Solis 110K-5G Three Phase Dual-MPPT String Inverter Datasheet',
    modelCode: 'SOLIS-110K-5G-DS',
    brand: 'Solis',
    category: 'datasheet',
    categoryLabel: 'Datasheet',
    fileType: 'PDF',
    fileSize: '3.4 MB',
    version: 'v3.2 - 2025',
    releaseDate: 'Jan 2025',
    downloadsCount: 1420,
    downloadUrl: '#',
    description: 'Complete electrical specifications, efficiency curves, MPPT tracking parameters, and mechanical drawings for Solis 110kW commercial inverter.',
    compatibility: ['Solis 110K-5G', 'Solis 100K-5G', 'Soltronic Commercial Microgrid Hub']
  },
  {
    id: 'doc-2',
    title: 'Inverex Nitrox 30kW & 50kW Three Phase Hybrid User Manual',
    modelCode: 'INV-NITROX-30K-50K-UM',
    brand: 'Inverex',
    category: 'manual',
    categoryLabel: 'User Manual',
    fileType: 'PDF',
    fileSize: '8.7 MB',
    version: 'v4.1 - 2025',
    releaseDate: 'Feb 2025',
    downloadsCount: 2890,
    downloadUrl: '#',
    description: 'Comprehensive installation guide, wiring diagrams, LCD menu configurations, error code troubleshooting, and parallel setup instructions.',
    compatibility: ['Inverex Nitrox 30kW', 'Inverex Nitrox 50kW', 'Nitrox Smart Cloud Dongle']
  },
  {
    id: 'doc-3',
    title: 'Pylontech Force H2 High Voltage LiFePO4 Battery Module Datasheet',
    modelCode: 'PYLON-FORCE-H2-DS',
    brand: 'Pylontech',
    category: 'datasheet',
    categoryLabel: 'Datasheet',
    fileType: 'PDF',
    fileSize: '2.1 MB',
    version: 'v2.0 - 2024',
    releaseDate: 'Dec 2024',
    downloadsCount: 1980,
    downloadUrl: '#',
    description: 'Cell chemistry specs, charge/discharge rates, thermal performance metrics, and rack expansion limits for Force H2 14.2kWh - 24.8kWh systems.',
    compatibility: ['Pylontech Force H2', 'Pylontech FC0500M BMS', 'Inverex Nitrox HV Series', 'Solis RHI Series']
  },
  {
    id: 'doc-4',
    title: 'Huawei SUN2000-100KTL-M2 Commercial Inverter Firmware & Tool',
    modelCode: 'HUA-SUN2000-FW-V200',
    brand: 'Huawei',
    category: 'firmware',
    categoryLabel: 'Firmware & Software',
    fileType: 'ZIP',
    fileSize: '45.2 MB',
    version: 'V200R001C00SPC120',
    releaseDate: 'Nov 2024',
    downloadsCount: 850,
    downloadUrl: '#',
    description: 'Latest official Huawei inverter firmware update package including SmartLogger 3000A integration configuration scripts.',
    compatibility: ['Huawei SUN2000-100KTL-M2', 'SmartLogger 3000A', 'FusionSolar Management Platform']
  },
  {
    id: 'doc-5',
    title: 'Jinko Tiger Pro 550W N-Type Bifacial IEC Certification & Warranty',
    modelCode: 'JINKO-TIGER-PRO-CERT',
    brand: 'Jinko Solar',
    category: 'certificate',
    categoryLabel: 'Certificates & Compliance',
    fileType: 'PDF',
    fileSize: '1.8 MB',
    version: 'v1.5 - 2025',
    releaseDate: 'Jan 2025',
    downloadsCount: 3100,
    downloadUrl: '#',
    description: 'Official TUV Rheinland, ISO 9001/14001 certificates, CE compliance, and 30-year linear performance warranty document.',
    compatibility: ['Jinko Tiger Pro 550W', 'Jinko Tiger Neo 575W', 'Jinko N-Type Bifacial Series']
  },
  {
    id: 'doc-6',
    title: 'Soltronic Standard 100kW Rooftop Single Line Diagram (SLD Schematic)',
    modelCode: 'SOL-SLD-100K-CAD',
    brand: 'Soltronic Engineering',
    category: 'cad',
    categoryLabel: 'Schematics & CAD',
    fileType: 'DWG',
    fileSize: '5.9 MB',
    version: 'v2025.1',
    releaseDate: 'Jan 2025',
    downloadsCount: 1120,
    downloadUrl: '#',
    description: 'AutoCAD DWG electrical schematic blueprint for 100kW commercial zero-export solar installation with AC/DC distribution boxes and SPD protection.',
    compatibility: ['AutoCAD 2020+', 'Soltronic 100kW EPC Template', 'NEPRA Net Metering Applications']
  },
  {
    id: 'doc-7',
    title: 'Dyness Powerbox Pro 10.24kWh Wall-Mounted Storage Brochure',
    modelCode: 'DYN-PBOX-PRO-BROCHURE',
    brand: 'Dyness',
    category: 'brochure',
    categoryLabel: 'Brochure & Catalog',
    fileType: 'PDF',
    fileSize: '4.5 MB',
    version: 'v1.0 - 2025',
    releaseDate: 'Feb 2025',
    downloadsCount: 940,
    downloadUrl: '#',
    description: 'Full-color product catalog highlighting sleek residential energy storage aesthetics, mobile app control features, and stackable scalability.',
    compatibility: ['Dyness Powerbox Pro', 'Dyness Tower T10/T14', 'Low-Voltage Inverters']
  },
  {
    id: 'doc-8',
    title: 'Sungrow Liquid-Cooled Energy Storage Container BESS Spec Sheet',
    modelCode: 'SUN-BESS-ST2752UX-DS',
    brand: 'Sungrow',
    category: 'datasheet',
    categoryLabel: 'Datasheet',
    fileType: 'PDF',
    fileSize: '6.2 MB',
    version: 'v2.2 - 2024',
    releaseDate: 'Oct 2024',
    downloadsCount: 670,
    downloadUrl: '#',
    description: 'Technical breakdown of 2.75MWh Sungrow utility BESS container system with active thermal management and NFPA 855 fire safety compliance.',
    compatibility: ['Sungrow ST2752UX', 'Sungrow PowerTitan Series', 'Soltronic Utility Microgrids']
  }
];

export default function DownloadsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedBrand, setSelectedBrand] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [previewDoc, setPreviewDoc] = useState<ResourceDoc | null>(null);
  const [selectedDocs, setSelectedDocs] = useState<string[]>([]);
  const [downloadingId, setDownloadingId] = useState<string | null>(null);
  const [downloadToast, setDownloadToast] = useState<string | null>(null);

  const categories = [
    { id: 'all', label: 'All Resources' },
    { id: 'datasheet', label: 'Datasheets' },
    { id: 'manual', label: 'User Manuals' },
    { id: 'brochure', label: 'Brochures & Catalogs' },
    { id: 'certificate', label: 'Certificates & Compliance' },
    { id: 'firmware', label: 'Firmware & Software' },
    { id: 'cad', label: 'Schematics & CAD' },
  ];

  const brands = [
    'All Brands',
    'Soltronic Engineering',
    'Inverex',
    'Solis',
    'Pylontech',
    'Huawei',
    'Jinko Solar',
    'Dyness',
    'Sungrow',
  ];

  const filteredDocs = RESOURCES.filter((doc) => {
    const matchesCategory = selectedCategory === 'all' || doc.category === selectedCategory;
    const matchesBrand = selectedBrand === 'All Brands' || doc.brand === selectedBrand;
    const matchesSearch =
      doc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doc.modelCode.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doc.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doc.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesBrand && matchesSearch;
  });

  const toggleSelectDoc = (id: string) => {
    setSelectedDocs((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleSingleDownload = (doc: ResourceDoc) => {
    setDownloadingId(doc.id);
    setTimeout(() => {
      setDownloadingId(null);
      setDownloadToast(`Downloading ${doc.title}...`);
      setTimeout(() => setDownloadToast(null), 4000);
    }, 1200);
  };

  const handleBulkDownload = () => {
    setDownloadingId('bulk');
    setTimeout(() => {
      setDownloadingId(null);
      setDownloadToast(`Preparing zip archive for ${selectedDocs.length} technical files...`);
      setTimeout(() => setDownloadToast(null), 4000);
    }, 1800);
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-800 font-sans pb-8">
      
      {/* Toast Notification */}
      {downloadToast && (
        <div className="fixed top-6 right-6 z-50 bg-slate-900 text-white px-5 py-3 rounded-2xl shadow-2xl border border-slate-700 flex items-center gap-3 animate-bounce">
          <span className="material-symbols-outlined text-emerald-400">download_done</span>
          <span className="text-xs font-semibold">{downloadToast}</span>
        </div>
      )}

      {/* Hero Header Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0c4a16] via-[#107022] to-[#082a0d] text-white pt-16 pb-12 px-4 sm:px-6 lg:px-8">
        
        {/* Subtle Decorative Pattern */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none"></div>
        <div className="absolute top-10 right-10 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto relative z-10 space-y-6 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-amber-300 text-xs font-semibold tracking-wider uppercase">
            <span className="material-symbols-outlined text-sm">folder_zip</span>
            Soltronic Technical Documentation Vault
          </div>
          
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
                Datasheets, Manuals & <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-orange-400 to-amber-200">CAD Schematics</span>
              </h1>
              <p className="text-base sm:text-lg text-emerald-100/90 leading-relaxed">
                Access official technical documentation for tier-1 solar inverters, lithium batteries, bifacial panels, and EPC engineering schematics. Download verified spec sheets in one click.
              </p>
            </div>

            {/* Quick Stat Bar */}
            <div className="w-full lg:w-auto grid grid-cols-2 gap-3 bg-white/10 backdrop-blur-xl border border-white/20 p-5 rounded-3xl shrink-0">
              <div className="bg-white/10 p-3.5 rounded-2xl text-center border border-white/10">
                <span className="block text-2xl sm:text-3xl font-black text-amber-300">180+</span>
                <span className="text-[11px] text-emerald-100 uppercase tracking-wider font-semibold">Datasheets</span>
              </div>
              <div className="bg-white/10 p-3.5 rounded-2xl text-center border border-white/10">
                <span className="block text-2xl sm:text-3xl font-black text-emerald-300">45+</span>
                <span className="text-[11px] text-emerald-100 uppercase tracking-wider font-semibold">Manuals</span>
              </div>
              <div className="bg-white/10 p-3.5 rounded-2xl text-center border border-white/10">
                <span className="block text-2xl sm:text-3xl font-black text-emerald-300">30+</span>
                <span className="text-[11px] text-emerald-100 uppercase tracking-wider font-semibold">Certificates</span>
              </div>
              <div className="bg-white/10 p-3.5 rounded-2xl text-center border border-white/10">
                <span className="block text-2xl sm:text-3xl font-black text-amber-300">CAD</span>
                <span className="text-[11px] text-emerald-100 uppercase tracking-wider font-semibold">Schematics</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Controls & Filters Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-20">
        <div className="bg-white/90 backdrop-blur-xl border border-gray-200/80 rounded-3xl p-4 sm:p-6 shadow-xl space-y-5">
          
          {/* Top Search Bar */}
          <div className="relative w-full">
            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-2xl">
              manage_search
            </span>
            <input
              type="text"
              placeholder="Search by model number, brand, document name (e.g. Solis 110K, Nitrox, Pylontech)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-10 py-3 bg-gray-50/80 border border-gray-200 rounded-2xl text-sm font-medium outline-none focus:border-[#107022] focus:ring-2 focus:ring-[#107022]/20 transition-all shadow-inner"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs text-gray-400 hover:text-gray-600 bg-gray-200 rounded-full w-6 h-6 flex items-center justify-center"
              >
                ✕
              </button>
            )}
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all duration-300 border ${
                    isActive
                      ? 'bg-[#107022] text-white border-[#107022] shadow-md shadow-[#107022]/20 scale-105'
                      : 'bg-gray-50 text-gray-600 border-gray-200 hover:bg-gray-100 hover:text-gray-900'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Brand Filter Pills */}
          <div className="pt-2 border-t border-gray-100 flex items-center gap-2 overflow-x-auto no-scrollbar">
            <span className="text-[11px] font-extrabold uppercase text-gray-400 shrink-0 mr-1">
              Filter Brand:
            </span>
            {brands.map((b) => {
              const isActive = selectedBrand === b;
              return (
                <button
                  key={b}
                  onClick={() => setSelectedBrand(b)}
                  className={`px-3 py-1 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
                    isActive
                      ? 'bg-amber-500 text-white shadow-sm font-bold'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {b}
                </button>
              );
            })}
          </div>

        </div>
      </section>

      {/* Resource Files Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-extrabold text-slate-900 flex items-center gap-2">
            <span className="material-symbols-outlined text-[#107022]">folder_open</span>
            Available Files ({filteredDocs.length})
          </h3>
          {selectedDocs.length > 0 && (
            <span className="text-xs font-bold text-[#107022] bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
              {selectedDocs.length} items queued for package download
            </span>
          )}
        </div>

        {filteredDocs.length === 0 ? (
          <div className="text-center py-10 bg-white rounded-3xl border border-gray-200 p-8 shadow-sm">
            <span className="material-symbols-outlined text-5xl text-gray-300 mb-3">find_in_page</span>
            <h3 className="text-xl font-bold text-gray-800 mb-1">No Documents Found</h3>
            <p className="text-sm text-gray-500 max-w-md mx-auto mb-6">
              We couldn’t find any technical documentation matching your search criteria.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
                setSelectedBrand('All Brands');
              }}
              className="bg-[#107022] text-white px-5 py-2.5 rounded-xl font-bold text-sm shadow-md hover:bg-[#0c591b] transition-all"
            >
              Reset Search & Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredDocs.map((doc) => {
              const isSelected = selectedDocs.includes(doc.id);
              const isDownloadingThis = downloadingId === doc.id;

              return (
                <div
                  key={doc.id}
                  className={`bg-white/90 backdrop-blur-md rounded-3xl border transition-all duration-300 p-6 flex flex-col justify-between space-y-4 shadow-sm hover:shadow-xl hover:-translate-y-1 relative ${
                    isSelected ? 'border-[#107022] ring-2 ring-[#107022]/20 bg-emerald-50/30' : 'border-gray-200'
                  }`}
                >
                  {/* Top Badge Row */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      {/* Checkbox for package download */}
                      <input
                        type="checkbox"
                        checked={isSelected}
                        onChange={() => toggleSelectDoc(doc.id)}
                        className="w-4 h-4 rounded text-[#107022] focus:ring-[#107022] cursor-pointer"
                        title="Select for bulk package download"
                      />
                      <span className="text-xs font-bold text-[#107022] bg-emerald-50 border border-emerald-100 px-2.5 py-0.5 rounded-lg">
                        {doc.brand}
                      </span>
                    </div>

                    {/* File Format Badge */}
                    <span
                      className={`text-[11px] font-black px-2.5 py-0.5 rounded-md text-white shadow-xs ${
                        doc.fileType === 'PDF'
                          ? 'bg-rose-500'
                          : doc.fileType === 'ZIP'
                          ? 'bg-blue-600'
                          : doc.fileType === 'DWG'
                          ? 'bg-purple-600'
                          : 'bg-emerald-600'
                      }`}
                    >
                      {doc.fileType}
                    </span>
                  </div>

                  {/* Document Title & Model Code */}
                  <div className="space-y-1">
                    <span className="text-[11px] font-mono text-gray-400 uppercase tracking-wider block">
                      MODEL CODE: {doc.modelCode}
                    </span>
                    <h4
                      onClick={() => setPreviewDoc(doc)}
                      className="text-base font-bold text-slate-900 leading-snug cursor-pointer hover:text-[#107022] transition-colors line-clamp-2"
                    >
                      {doc.title}
                    </h4>
                    <p className="text-xs text-gray-500 line-clamp-2 leading-relaxed pt-1">
                      {doc.description}
                    </p>
                  </div>

                  {/* Metadata Row */}
                  <div className="grid grid-cols-3 gap-2 bg-slate-50 p-2.5 rounded-xl border border-slate-100 text-center text-xs">
                    <div>
                      <span className="text-[9px] font-semibold text-gray-400 block uppercase">SIZE</span>
                      <span className="font-bold text-slate-800">{doc.fileSize}</span>
                    </div>
                    <div>
                      <span className="text-[9px] font-semibold text-gray-400 block uppercase">VERSION</span>
                      <span className="font-bold text-slate-800">{doc.version}</span>
                    </div>
                    <div>
                      <span className="text-[9px] font-semibold text-gray-400 block uppercase">DOWNLOADS</span>
                      <span className="font-bold text-emerald-600">{doc.downloadsCount}</span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-2 border-t border-gray-100 flex items-center gap-2">
                    <button
                      onClick={() => setPreviewDoc(doc)}
                      className="flex-1 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold py-2.5 px-3 rounded-xl text-xs transition-colors flex items-center justify-center gap-1"
                    >
                      <span className="material-symbols-outlined text-base">visibility</span>
                      Preview
                    </button>

                    <button
                      onClick={() => handleSingleDownload(doc)}
                      disabled={isDownloadingThis}
                      className="flex-1 bg-[#107022] hover:bg-orange-500 text-white font-bold py-2.5 px-3 rounded-xl text-xs transition-all shadow-md flex items-center justify-center gap-1"
                    >
                      {isDownloadingThis ? (
                        <>
                          <span className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                          Saving...
                        </>
                      ) : (
                        <>
                          <span className="material-symbols-outlined text-base">download</span>
                          Download
                        </>
                      )}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </section>

      {/* Floating Bulk Download Bar */}
      {selectedDocs.length > 0 && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 bg-slate-900/95 backdrop-blur-xl text-white px-6 py-4 rounded-3xl shadow-2xl border border-slate-700 flex items-center justify-between gap-6 max-w-xl w-11/12 animate-slideUp">
          <div className="flex items-center gap-3">
            <span className="w-8 h-8 rounded-full bg-emerald-500 text-slate-950 font-black flex items-center justify-center text-xs">
              {selectedDocs.length}
            </span>
            <div>
              <h5 className="text-xs font-bold">Selected Files Queued</h5>
              <p className="text-[11px] text-slate-400">Ready for consolidated ZIP package export</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setSelectedDocs([])}
              className="text-xs text-slate-400 hover:text-white px-3 py-1.5 rounded-lg transition-colors"
            >
              Clear
            </button>
            <button
              onClick={handleBulkDownload}
              disabled={downloadingId === 'bulk'}
              className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold px-4 py-2 rounded-xl text-xs transition-colors shadow-lg flex items-center gap-1.5"
            >
              {downloadingId === 'bulk' ? (
                <>
                  <span className="w-3.5 h-3.5 border-2 border-slate-950 border-t-transparent rounded-full animate-spin"></span>
                  Archiving...
                </>
              ) : (
                <>
                  <span className="material-symbols-outlined text-base">folder_zip</span>
                  Download Zip Package
                </>
              )}
            </button>
          </div>
        </div>
      )}



      {/* Quick Document Preview Drawer / Modal */}
      {previewDoc && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
          <div
            className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 space-y-6 shadow-2xl border border-gray-100 relative text-slate-800"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setPreviewDoc(null)}
              className="absolute top-4 right-4 bg-slate-100 hover:bg-slate-200 text-slate-600 w-8 h-8 rounded-full flex items-center justify-center transition-colors"
            >
              ✕
            </button>

            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-[#107022] bg-emerald-50 px-2.5 py-0.5 rounded-md">
                  {previewDoc.brand}
                </span>
                <span className="text-xs font-bold text-rose-600 bg-rose-50 px-2.5 py-0.5 rounded-md">
                  {previewDoc.categoryLabel}
                </span>
              </div>
              <h3 className="text-xl font-black text-slate-900">{previewDoc.title}</h3>
              <span className="text-xs font-mono text-gray-400 block">
                Model: {previewDoc.modelCode} • Version {previewDoc.version}
              </span>
            </div>

            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 space-y-2">
              <h5 className="text-xs font-extrabold uppercase text-slate-400 tracking-wider">Document Summary</h5>
              <p className="text-xs text-slate-700 leading-relaxed">{previewDoc.description}</p>
            </div>

            {/* Compatible Hardware List */}
            <div>
              <h5 className="text-xs font-extrabold uppercase text-slate-400 tracking-wider mb-2">
                Compatible Hardware & Platforms
              </h5>
              <div className="flex flex-wrap gap-1.5">
                {previewDoc.compatibility.map((item, idx) => (
                  <span
                    key={idx}
                    className="bg-slate-100 border border-slate-200 text-slate-700 text-xs font-semibold px-2.5 py-1 rounded-lg"
                  >
                    ✓ {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Modal Actions */}
            <div className="pt-4 border-t border-gray-100 flex items-center justify-end gap-3">
              <button
                onClick={() => setPreviewDoc(null)}
                className="px-4 py-2.5 rounded-xl text-xs font-bold text-gray-500 hover:text-gray-800"
              >
                Close Preview
              </button>
              <button
                onClick={() => {
                  handleSingleDownload(previewDoc);
                  setPreviewDoc(null);
                }}
                className="bg-[#107022] hover:bg-orange-500 text-white font-bold px-6 py-2.5 rounded-xl text-xs transition-colors shadow-md flex items-center gap-1.5"
              >
                <span className="material-symbols-outlined text-base">download</span>
                Download Document ({previewDoc.fileSize})
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
