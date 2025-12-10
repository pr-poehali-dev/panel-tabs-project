import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import Icon from "@/components/ui/icon";

interface StatsCardsProps {
  statsData: {
    total: number;
    passed: number;
    failed: number;
    efficiency: number;
  };
}

const StatsCards = ({ statsData }: StatsCardsProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
      <Card className="hover:shadow-lg transition-shadow">
        <CardHeader className="pb-3">
          <CardDescription>Всего проверено</CardDescription>
          <CardTitle className="text-3xl">{statsData.total}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Icon name="Package" size={16} />
            <span>за сегодня</span>
          </div>
        </CardContent>
      </Card>

      <Card className="hover:shadow-lg transition-shadow">
        <CardHeader className="pb-3">
          <CardDescription>Годных</CardDescription>
          <CardTitle className="text-3xl text-green-600">{statsData.passed}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Icon name="CheckCircle2" size={16} />
            <span>{((statsData.passed / statsData.total) * 100).toFixed(1)}%</span>
          </div>
        </CardContent>
      </Card>

      <Card className="hover:shadow-lg transition-shadow">
        <CardHeader className="pb-3">
          <CardDescription>Брак</CardDescription>
          <CardTitle className="text-3xl text-red-600">{statsData.failed}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Icon name="XCircle" size={16} />
            <span>{((statsData.failed / statsData.total) * 100).toFixed(1)}%</span>
          </div>
        </CardContent>
      </Card>

      <Card className="hover:shadow-lg transition-shadow">
        <CardHeader className="pb-3">
          <CardDescription>Эффективность</CardDescription>
          <CardTitle className="text-3xl">{statsData.efficiency}%</CardTitle>
        </CardHeader>
        <CardContent>
          <Progress value={statsData.efficiency} className="h-2" />
        </CardContent>
      </Card>
    </div>
  );
};

export default StatsCards;
