import { Sum } from "../FoodApp/sum";

test("Sum function ",()=>{
    const result = Sum(3,4);
    expect(result).toBe(7)
})