'use client';

import { useRouter, useSearchParams } from 'next/navigation';

const SortSelect = ({ category, sort }) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleChange = (e) => {
    const selectedSort = e.target.value;
    const params = new URLSearchParams(searchParams.toString());

    if (category) params.set('category', category);
    if (selectedSort) params.set('sort', selectedSort);

    router.push(`/?${params.toString()}`);
  };

  return (
    <div>
      <label htmlFor="sort" className="text-sm font-medium text-gray-700 mr-2">Sort by:</label>
      <select
        id="sort"
        name="sort"
        className="border border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500"
        onChange={handleChange}
        value={sort}
      >
        <option value="latest">Latest</option>
        <option value="oldest">Oldest</option>
        
      </select>
    </div>
  );
};

export default SortSelect;
