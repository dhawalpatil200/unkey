type Props = {
  title: string;
  description?: string;
  actions?: React.ReactNode[];
};

export const PageHeader: React.FC<Props> = ({ title, description, actions }) => {
  const actionRows: React.ReactNode[][] = [];
  if (actions) {
    for (let i = 0; i < actions.length; i += 3) {
      actionRows.push(actions.slice(i, i + 3));
    }
  }

  return (
    <div className="flex flex-col items-start justify-between w-full gap-2 mb-4 md:items-center md:flex-row md:mb-8 lg:mb-12 md:gap-4">
      <div className="space-y-1 ">
        <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
        <p className="text-sm text-zinc-500 dark:text-zinc-400">{description}</p>
      </div>
      {actionRows.map((row, i) => (
        <ul key={i.toString()} className="flex items-center justify-end gap-2 md:gap-4 flex-wrap md:flex-nowrap">
          {row.map((action, i) => (
            // rome-ignore lint/suspicious/noArrayIndexKey: <explanation>
            <li key={i}>{action}</li>
          ))}
        </ul>
      ))}
    </div>
  );
};