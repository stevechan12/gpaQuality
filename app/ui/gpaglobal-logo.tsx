import Image from 'next/image';

export default function GPAGlobalLogo() {
  return (
    <div className={`flex flex-row items-center leading-none text-white`}>
      <Image 
        src="/gpaglobal.png"
        width={200}
        height={80}
        alt="GPA Global Logo"
      />      
    </div>
  );
}
