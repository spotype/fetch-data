export default function page() {
  return (
    <div>
      <pre
        style={{
          wordWrap: "break-word",
          whiteSpace: "pre-wrap",
        }}
      >
        {data}
      </pre>
    </div>
  );
}

const data = `{"id":7,"title":"Samsung Galaxy Book","description":"Samsung Galaxy Book S (2020) Laptop With Intel Lakefield Chip, 8GB of RAM Launched","price":1499,"discountPercentage":4.15,"rating":4.25,"stock":50,"brand":"Samsung","category":"laptops","thumbnail":"https://i.dummyjson.com/data/products/7/thumbnail.jpg","images":["https://i.dummyjson.com/data/products/7/1.jpg","https://i.dummyjson.com/data/products/7/2.jpg","https://i.dummyjson.com/data/products/7/3.jpg","https://i.dummyjson.com/data/products/7/thumbnail.jpg"]}`;
