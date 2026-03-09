import { faSearch, faFilter, faTags } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { Tag } from '../screens/services';

interface FilterControlsProps {
    selectedTagType: 'All' | Tag['type'];
    setSelectedTagType: (type: 'All' | Tag['type']) => void;
    selectedTag: string;
    setSelectedTag: (tag: string) => void;
    searchQuery: string;
    setSearchQuery: (query: string) => void;
    availableTags: Tag[];
}

export function FilterControls({
    selectedTagType,
    setSelectedTagType,
    selectedTag,
    setSelectedTag,
    searchQuery,
    setSearchQuery,
    availableTags
}: FilterControlsProps) {
    const displayTags = availableTags.filter(t => selectedTagType === 'All' || t.type === selectedTagType);

    return (
        <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-10 w-full mx-auto">
            {/* Search */}
            <div className="relative w-full md:w-2/5 group">
                <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none transition-colors duration-300 group-focus-within:text-[#FF5C00] text-gray-400">
                    <FontAwesomeIcon icon={faSearch} />
                </div>
                <input
                    type="text"
                    placeholder="Search titles, descriptions..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="block w-full pl-12 pr-4 py-3 bg-white border border-slate-200 rounded-sm focus:outline-none focus:border-[#FF5C00] transition-colors duration-300 text-gray-800 placeholder-gray-400 hover:border-gray-300 font-sans text-sm"
                />
            </div>

            {/* Tag Type Dropdown */}
            <div className="w-full md:w-1/4 relative group">
                <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none transition-colors duration-300 group-focus-within:text-[#FF5C00] text-gray-400">
                    <FontAwesomeIcon icon={faFilter} />
                </div>
                <select
                    value={selectedTagType}
                    onChange={(e) => {
                        setSelectedTagType(e.target.value as 'All' | Tag['type']);
                        setSelectedTag('All');
                    }}
                    className="block w-full pl-12 pr-10 py-3 bg-white border border-slate-200 rounded-sm focus:outline-none focus:border-[#FF5C00] transition-colors duration-300 cursor-pointer text-gray-800 hover:border-gray-300 appearance-none font-sans text-sm"
                >
                    <option value="All">All Types</option>
                    <option value="service" className="text-gray-800">Services</option>
                    <option value="skill" className="text-gray-800">Skills</option>
                    <option value="tech" className="text-gray-800">Tech Stacks</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-gray-400 transition-transform duration-300 group-focus-within:rotate-180">
                    <svg className="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" /></svg>
                </div>
            </div>

            {/* Tag Name Dropdown */}
            <div className="w-full md:w-[35%] relative group">
                <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none transition-colors duration-300 group-focus-within:text-[#FF5C00] text-gray-400">
                    <FontAwesomeIcon icon={faTags} />
                </div>
                <select
                    value={selectedTag}
                    onChange={(e) => setSelectedTag(e.target.value)}
                    className="block w-full pl-12 pr-10 py-3 bg-white border border-slate-200 rounded-sm focus:outline-none focus:border-[#FF5C00] transition-colors duration-300 cursor-pointer text-gray-800 hover:border-gray-300 appearance-none font-sans text-sm"
                >
                    <option value="All">All Tags</option>
                    {displayTags.map(tag => (
                        <option key={tag.name} value={tag.name} className="text-gray-800">{tag.name}</option>
                    ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-gray-400 transition-transform duration-300 group-focus-within:rotate-180">
                    <svg className="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" /></svg>
                </div>
            </div>
        </div>
    );
}
