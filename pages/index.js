import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { useEffect } from "react";

let loglist = [
["Zodiac shores", "https://blockparty.game/share/building/08b291a6-de25-5fff-0200-9c9a9c4a3dd2"],
["seabird’s perch marina", "https://blockparty.game/share/building/08b291a6-de30-dfff-0200-309c0be5b0ab"],
["crystalline corsair", "https://blockparty.game/share/building/08b291a6-de04-8fff-0200-6d08185f15b7"],
["tidal fang dojo", "https://blockparty.game/share/building/08b28d55-1d07-5fff-0200-791296b6025e"],
["pacific gateway terminal", "https://blockparty.game/share/building/08b28de8-d851-bfff-0200-7b462242e0b9"],
["moonlit honu", "https://blockparty.game/share/building/08b46482-3612-8fff-0200-282521a8b595"],
["Orcas' cove", "https://blockparty.game/share/building/08b464b9-6b79-cfff-0200-53955f8584cd"],
["aerovista academy", "https://blockparty.game/share/building/08b464b9-6a1a-efff-0200-417163e44ff4"],
["nexus prism observatory ", "https://blockparty.game/share/building/08b464b9-7396-4fff-0200-b2126bdc31d8"],
["aloha heights", "https://blockparty.game/share/building/08b46494-b2ad-8fff-0200-6cafe243ef82"],
["leviathan's lair", "https://blockparty.game/share/building/08b46494-b252-5fff-0200-4755d018e1d9"],
["pixie's mischief workshop", "https://blockparty.game/share/building/08b46494-1ed0-8fff-0200-91689dc8b943"],
["cloudview oasis", "https://blockparty.game/share/building/08b46494-b2ca-cfff-0200-dc9f0acefcde"],
["Aurora crown", "https://blockparty.game/share/building/08b28d54-2d52-cfff-0200-684f844448ae"],
["The whimsical wisdom works", "https://blockparty.game/share/building/08b28308-2dc2-3fff-0200-f36d670b45bf"],
]

// ["The First Story", "https://github.com/MarineNewt"],
// ["Shooting Stars", "https://github.com/MarineNewt"],
// ["A Brief history of plants", "https://github.com/MarineNewt"],

const leetMap = {
  'A': '4',
  'E': '3',
  'I': '1',
  'O': '0',
  'S': '5',
  'T': '7',
  'B': '8',
  'G': '6',
  'Z': '2'
};

export default function Home() {
  useEffect(() => {
    const elements = document.querySelectorAll(`.${styles.linktext}`);

    function scrambleElement(el) {
      const original = el.dataset.text;
      let chars = original.split('');

      // Random number of letters to glitch
      const glitches = Math.floor(Math.random() * 3) + 1;

      for (let g = 0; g < glitches; g++) {
        const index = Math.floor(Math.random() * chars.length);
        const char = chars[index].toUpperCase();
        if (leetMap[char]) {
          chars[index] = leetMap[char];
        }
      }

      el.textContent = chars.join('');

      // Revert after short delay
      setTimeout(() => {
        el.textContent = original;
      }, Math.random() * 2500 + 500);
    }

    // Run scrambling randomly forever
    const interval = setInterval(() => {
      const el = elements[Math.floor(Math.random() * elements.length)];
      if (el) scrambleElement(el);
    }, 150);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{backgroundColor: "black"}} className={styles.container}>
      <Head>
        <title>Newt Files</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={[styles.main]}>
        {loglist.map((x, keyn) => <div key={keyn} className={styles.wordframe}><div className={styles.focusarr}>&gt;</div><a className={styles.linktext} href={x[1]} target="_blank" rel="noopener noreferrer" data-text={x[0].toUpperCase()}>{x[0].toUpperCase()}</a></div>)}
      </main>
    </div>
  );
}
