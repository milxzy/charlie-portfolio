export function Footer() {
  return (
    <footer className="border-t border-border bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Charlie Edwards. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">Filmmaker & Composer</p>
        </div>
      </div>
    </footer>
  )
}
