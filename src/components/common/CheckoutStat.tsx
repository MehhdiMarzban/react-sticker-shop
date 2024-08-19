import { appTexts } from "../../constants";
import { PersianNumber } from "../core";

const CheckoutStat: React.FC<{ cartTotalAmount: number; cartTotalQty: number }> = ({
    cartTotalAmount = 0,
    cartTotalQty = 0,
}) => {
    return (
        <div className="flex flex-col sm:flex-row stats bg-accent text-primary-content w-full overflow-hidden">
            <div className="stat text-center w-full p-4 lg:p-6">
                <div className="stat-title text-secondary-content font-bold">
                    {appTexts.SUM_OF_CHECKOUT}
                </div>
                <div className="stat-value font-bold text-gray-800">
                    <PersianNumber
                        value={cartTotalAmount}
                        thousandSeparator=","
                        suffix={appTexts.TOMAN_SUFFIX}
                    />
                </div>
                <div className="stat-actions w-full">
                    <button className="btn btn-primary w-full">{appTexts.PAY}</button>
                </div>
            </div>

            <div className="stat text-center w-full p-4 lg:p-6">
                <div className="stat-title text-secondary-content font-bold">
                    {appTexts.COUNT_OF_PRODUCTS}
                </div>
                <div className="stat-value font-bold text-gray-800">
                    <PersianNumber value={cartTotalQty} />
                </div>
                <div className="stat-actions w-full flex flex-row justify-center items-center">
                    <button className="btn btn-primary w-1/3 rounded-l-none my-0 shadow-none">
                        {appTexts.APPLY}
                    </button>
                    <input
                        type="text"
                        placeholder={appTexts.DISCOUNT_CODE}
                        className="input input-bordered input-primary w-2/3 max-w-xs rounded-r-none border-none text-base-content"
                    />
                </div>
            </div>
        </div>
    );
};

export default CheckoutStat;
