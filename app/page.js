export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-400 via-black-600 to-red-500 text-white flex items-center justify-center">
      <div className="text-center p-6 sm:p-12 max-w-3xl">
        <h1 className="text-4xl sm:text-6xl font-bold mb-6">Surya Prasad Sadige</h1>
        <div className="bg-white bg-opacity-20 p-6 sm:p-10 rounded-xl shadow-xl">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
            A Full Stack Developer
          </h2>
          <p className="text-lg sm:text-xl leading-relaxed ">
          I’m a Full Stack Developer with experience in creating websites and web applications using technologies like HTML, CSS, JavaScript, React.js, Next.js, Python, Django, and MongoDB. I enjoy building user-friendly and responsive designs, as well as efficient and reliable backend systems. I love turning ideas into real, functional projects.
          </p>
        </div>
      </div>
    </div>
  );
}
export const metadata = {
  title: "Home",
  description: "Created By S. Surya Prasad",
};
