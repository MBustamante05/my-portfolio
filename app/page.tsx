import Landing from "@/components/Landing";
import styles from "../components/textures.module.css";

export default function Home() {
  return (
    <div className={`text-[#403D38] ${styles.sandTexture} px-24 py-8`}>
      <section>
        <Landing />
      </section>
    </div>
  );
}
