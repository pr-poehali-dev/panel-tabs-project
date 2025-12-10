import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Progress } from "@/components/ui/progress";
import Icon from "@/components/ui/icon";

interface InspectionTabProps {
  inspectionData: Array<{
    id: string;
    status: string;
    defects: number;
    timestamp: string;
    operator: string;
  }>;
}

const InspectionTab = ({ inspectionData }: InspectionTabProps) => {
  return (
    <div className="space-y-6 animate-fade-in">
      <Card>
        <CardHeader>
          <CardTitle>Результаты проверки корпусов</CardTitle>
          <CardDescription>Последние проверенные изделия</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID корпуса</TableHead>
                <TableHead>Статус</TableHead>
                <TableHead>Дефекты</TableHead>
                <TableHead>Время</TableHead>
                <TableHead>Оператор</TableHead>
                <TableHead className="text-right">Действия</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {inspectionData.map((item) => (
                <TableRow key={item.id} className="hover:bg-slate-50">
                  <TableCell className="font-mono font-medium">{item.id}</TableCell>
                  <TableCell>
                    <Badge
                      variant={item.status === "годен" ? "default" : "destructive"}
                      className={item.status === "годен" ? "bg-green-500" : ""}
                    >
                      {item.status === "годен" ? (
                        <Icon name="CheckCircle2" size={14} className="mr-1" />
                      ) : (
                        <Icon name="XCircle" size={14} className="mr-1" />
                      )}
                      {item.status.toUpperCase()}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    {item.defects === 0 ? (
                      <span className="text-green-600 font-medium">0</span>
                    ) : (
                      <span className="text-red-600 font-medium">{item.defects}</span>
                    )}
                  </TableCell>
                  <TableCell className="text-muted-foreground">{item.timestamp}</TableCell>
                  <TableCell>{item.operator}</TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="sm">
                      <Icon name="Eye" size={16} />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Распределение дефектов</CardTitle>
            <CardDescription>По типам найденных дефектов</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Трещины</span>
                <span className="font-medium">8 (57%)</span>
              </div>
              <Progress value={57} className="h-3" />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Сколы</span>
                <span className="font-medium">4 (29%)</span>
              </div>
              <Progress value={29} className="h-3" />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Деформация</span>
                <span className="font-medium">2 (14%)</span>
              </div>
              <Progress value={14} className="h-3" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Производительность</CardTitle>
            <CardDescription>Проверок в час по операторам</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <Icon name="User" size={20} className="text-blue-600" />
                </div>
                <span className="font-medium">Иванов И.И.</span>
              </div>
              <span className="text-2xl font-bold">52</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <Icon name="User" size={20} className="text-green-600" />
                </div>
                <span className="font-medium">Петров П.П.</span>
              </div>
              <span className="text-2xl font-bold">48</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                  <Icon name="User" size={20} className="text-purple-600" />
                </div>
                <span className="font-medium">Сидоров С.С.</span>
              </div>
              <span className="text-2xl font-bold">45</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default InspectionTab;
