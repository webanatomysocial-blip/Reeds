import Image from "next/image";

export default function StoriesLoader({ loading }) {
  return (
    <div className={`stories-loader${loading ? "" : " is-hidden"}`}>
      <Image src="/assets/reeds.avif" alt="REEDS" width={140} height={93} priority className="stories-loader-logo" />
    </div>
  );
}
