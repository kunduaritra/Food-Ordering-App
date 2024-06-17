const GroceryShimmer = () => {
  const shimmerItems = Array.from({ length: 36 }).map((_, index) => (
    <div key={index} className="h-32 w-28 p-4">
      <div className="bg-gray-100 w-22 h-20 rounded-xl"></div>
      <div className="bg-gray-100 mt-2 rounded-xl h-2"></div>
    </div>
  ));
  return <div className="flex flex-wrap m-8 p-7">{shimmerItems}</div>;
};

export default GroceryShimmer;
