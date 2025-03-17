interface Report {
  name: string;
  message: string;
  stack?: string;
  data?: Record<string, string>;
}

// TODO: 外部サービスへログを記録する issue: #10
// ログ出力は全てここにまとめる
export const useLogging = () => {

  const report = (data: Report) => {
    console.log(data);
  }

  const errorReport = (data: Error) => {
    alert(data.message);
    console.error(data);
  }

  return {
    report,
    errorReport,
  };
}
