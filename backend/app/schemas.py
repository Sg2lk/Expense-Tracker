# Se usa una ExpenseBase por que es mas sencillo de escalar y evitamos duplicacion de codigo
from pydantic import BaseModel
from datetime import datetime
from typing import Optional

class ExpenseBase(BaseModel):
    title: str
    amount: float
    category: Optional[str] = None

class ExpenseCreate(ExpenseBase):
    pass

class Expense(ExpenseBase):
    id: int
    date: datetime

    model_config = {
        "from_attributes": True
    }