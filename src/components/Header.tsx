import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

interface HeaderProps {
  onExport: (format: string) => void;
}

const Header = ({ onExport }: HeaderProps) => {
  return (
    <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <Icon name="ScanSearch" className="text-white" size={24} />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">Система контроля качества</h1>
              <p className="text-sm text-muted-foreground">Промышленный мониторинг</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="outline" size="sm" onClick={() => onExport("excel")}>
              <Icon name="FileSpreadsheet" size={16} className="mr-2" />
              Excel
            </Button>
            <Button variant="outline" size="sm" onClick={() => onExport("pdf")}>
              <Icon name="FileText" size={16} className="mr-2" />
              PDF
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
