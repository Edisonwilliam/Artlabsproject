export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-6 px-6 bg-white dark:bg-myarte-dark text-center">
      <p className="text-sm text-gray-600 dark:text-gray-400">
        © {currentYear} MyArteLab. All rights reserved.
      </p>
    </footer>
  )
}
