type RestaurantProps = {
  name: string;
  image: string;
  rating: number;
  deliveryTime: string;
  cuisine: string;
};

export default function RestaurantCard({
  name,
  image,
  rating,
  deliveryTime,
  cuisine,
}: RestaurantProps) {
  return (
    <div className="rounded-xl overflow-hidden shadow-md">
      <img
        src={image}
        alt={name}
        className="w-full h-52 object-cover"
      />

      <div className="p-3">
        <h3 className="font-bold text-lg">{name}</h3>

        <p>⭐ {rating}</p>

        <p>{deliveryTime}</p>

        <p className="text-gray-500">{cuisine}</p>
      </div>
    </div>
  );
}