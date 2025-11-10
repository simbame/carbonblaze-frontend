import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { Button } from "@mui/material";

export default function Page() {
  return (
    <div className="flex items-center justify-between px-36 py-9 max-md:flex-col">
      <p>All Transactions</p>
      <div>
        <Button variant="contained" color="success">
          <ArrowDownwardIcon /> Download latest Statement
        </Button>
      </div>
    </div>
  );
}
