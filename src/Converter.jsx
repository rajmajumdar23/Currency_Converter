import React, { useState, useEffect } from 'react';
import { FaDollarSign, FaEuroSign, FaRupeeSign, FaYenSign, FaPoundSign } from 'react-icons/fa';
import { AiFillFlag} from 'react-icons/ai';
import A from "./sl_121021_47240_20.jpg"
import B from "./silver-golden-coins-falling-coins-wooden-wall.jpg"
import "./Converter.css";
const Converter = () => {
    const [amount, setAmount] = useState(1);
    const [fromCurrency, setFromCurrency] = useState('USD');
    const [toCurrency, setToCurrency] = useState('EUR');
    const [result, setResult] = useState(null);

    useEffect(() => {
        const exchangeRates = {
            USD: {
                EUR: 0.9187,
                INR: 83.117967,
                JPY: 146.324278,
                GBP: 0.785454,
                CHF: 0.880156,
                PKR: 296.459167,
                BDT: 109.44,
                IRR: 42098.377287,
                ILS: 3.787116,
                RUB: 94.643944,
                LKR: 324.249098,
                NPR: 132.889102,
                BTN: 82.97,
                SGD: 1.36,
                AED:3.67,
            },
            EUR: {
                USD: 1.092337,
                INR: 1.092337,
                JPY: 159.305567,
                GBP: 0.854074,
                CHF: 0.958379,
                PKR: 0.958379,
                BDT: 119.53,
                IRR: 45690.852872,
                ILS: 4.108891,
                RUB: 102.703421,
                LKR: 351.794156,
                NPR: 0.63,
                BTN: 90.02,
                SGD: 1.47,
                AED:3.98,
            },
            INR: {
                USD: 0.014,
                EUR: 0.012,
                JPY: 1.46,
                GBP: 0.012,
                CHF: 0.015,
                PKR: 20.67,
                BDT: 0.88,
                IRR: 507.170441,
                ILS: 0.045626,
                RUB: 1.140384,
                LKR: 3.906594,
                NPR: 1.60,
                BTN: 1.00,
                SGD: 0.016,
                AED:0.044,
            },
            JPY: {
                USD: 0.006857,
                EUR: 0.006277,
                INR: 0.569654,
                GBP: 0.005361,
                CHF: 0.006017,
                PKR: 2.052772,
                BDT: 0.75,
                IRR: 289.60,
                ILS: 0.026,
                RUB: 0.65,
                LKR: 2.22,
                NPR: 0.91,
                BTN: 0.57,
                SGD: 0.0093,
                AED:0.025,
            },
            GBP: {
                USD: 1.279267,
                EUR: 1.279267,
                INR: 106.262624,
                JPY: 186.530386,
                CHF: 1.122567,
                PKR: 1.122567,
                BDT: 89.84,
                IRR: 53590.535431,
                ILS: 4.824028,
                RUB: 120.494895,
                LKR: 412.899496,
                NPR: 168.96,
                BTN: 105.60,
                SGD: 1.73,
                AED:4.68,
            },
            CHF: {
                USD: 1.139591,
                EUR: 1.043207,
                INR: 94.667590,
                JPY: 166.169044,
                GBP: 0.890947,
                PKR: 341.371864,
                BDT: 124.74,
                IRR: 47807.922777,
                ILS: 4.305138,
                RUB: 107.377718,
                LKR: 368.502869,
                NPR: 150.78,
                BTN: 94.24,
                SGD: 1.54,
                AED:4.17,
            },
            PKR: {
                USD: 0.003339,
                EUR: 0.003081,
                INR: 0.277188,
                JPY: 0.487813,
                GBP: 0.002625,
                CHF: 0.002942,
                BDT: 0.36,
                IRR: 140.591683,
                ILS: 0.012655,
                RUB: 0.315264,
                LKR: 1.082732,
                NPR: 0.44,
                BTN: 0.28,
                SGD: 0.0045,
                AED:0.012,
            },
            BDT: {
                USD: 0.0092,
                EUR: 0.0084,
                INR: 0.76,
                JPY: 1.34,
                GBP: 0.0072,
                CHF: 0.0081,
                PKR: 2.74,
                IRR: 386.82,
                ILS: 0.035,
                RUB: 0.87,
                LKR: 2.97,
                NPR: 1.22,
                BTN: 0.76,
                SGD: 0.012,
                AED:0.034,
            },
            IRR: {
                USD: 0.000024,
                EUR: 0.000022,
                INR: 0.0020,
                JPY: 0.0035,
                GBP: 0.000019,
                CHF: 0.000021,
                PKR: 0.0071,
                BDT: 0.0026,
                ILS: 0.000090,
                RUB: 0.0022,
                LKR: 0.0022,
                NPR: 0.0031,
                BTN: 0.0020,
                SGD: 0.000032,
                AED:0.000087,
            },
            ILS: {
                USD: 0.26,
                EUR: 0.24,
                INR: 21.90,
                JPY: 38.45,
                GBP: 0.21,
                CHF: 0.23,
                PKR: 79.00,
                BDT: 28.82,
                IRR: 11144.52,
                RUB: 24.83,
                LKR: 85.53,
                NPR: 35.02,
                BTN: 21.88,
                SGD: 0.36,
            },
            RUB: {
                USD: 0.011,
                EUR: 0.0098,
                INR: 0.88,
                JPY: 1.55,
                GBP: 0.0083,
                CHF: 0.0093,
                PKR: 3.18,
                BDT: 1.16,
                IRR: 448.90,
                ILS: 0.040,
                LKR: 3.45,
                NPR: 1.41,
                BTN: 0.88,
                SGD: 0.014,
                AED:0.039,
            },
            LKR: {
                USD: 0.0031,
                EUR: 0.0028,
                INR: 0.26,
                JPY: 0.45,
                GBP: 0.0024,
                CHF: 0.0027,
                PKR: 0.92,
                BDT: 0.34,
                IRR: 130.31,
                ILS: 0.012,
                RUB: 0.29,
                NPR: 0.41,
                BTN: 0.26,
                SGD: 0.0042,
                AED:0.011,
            },
            NPR: {
                USD: 0.0075,
                EUR: 0.0069,
                INR: 0.63,
                JPY: 1.10,
                GBP: 0.0059,
                CHF: 0.0066,
                PKR: 2.26,
                BDT: 0.82,
                IRR: 130.31,
                ILS: 318.32,
                RUB: 0.71,
                LKR: 2.44,
                BTN: 0.63,
                SGD: 0.010,
                AED:0.028,
            },
            BTN: {
                USD: 0.012,
                EUR: 0.011,
                INR: 1.00,
                JPY: 1.76,
                GBP: 0.0095,
                CHF: 0.011,
                PKR: 3.61,
                BDT: 1.32,
                IRR: 509.31,
                ILS: 0.046,
                RUB: 1.13,
                LKR: 3.90,
                NPR: 1.60,
                SGD: 0.016,
                AED:0.044,
            },
            SGD: {
                USD: 0.74,
                EUR: 0.68,
                INR: 61.18,
                JPY: 107.37,
                GBP: 0.58,
                CHF: 0.65,
                PKR: 218.31,
                BDT: 80.47,
                IRR: 31118.46,
                ILS: 2.79,
                RUB: 69.32,
                LKR: 238.82,
                NPR: 97.77,
                BTN: 61.11,
                AED:2.71,
            },
            AED: {
                USD: 0.27,
                EUR: 0.27,
                INR: 22.61,
                JPY: 39.68,
                GBP: 0.21,
                CHF: 0.24,
                PKR: 80.70,
                BDT: 29.74,
                IRR: 11502.86,
                ILS: 1.03,
                RUB: 25.66,
                LKR: 88.28,
                NPR: 36.14,
                BTN: 22.59,
                SGD: 0.37,
            },
        };

        const convertedAmount = (amount * exchangeRates[fromCurrency][toCurrency]).toFixed(2);
        setResult(`${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}`);
    }, [amount, fromCurrency, toCurrency]);

    return (
    <>
    <img id='background_img' src={A}/>
    <img id='background_img2' src={B}/>
        <div className="Converter">
            <h2>Currency Converter</h2>
            <div className="ConversionForm">
                <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                />
                <select
                    value={fromCurrency}
                    onChange={(e) => setFromCurrency(e.target.value)}
                >
                    <option value="USD">
                        <FaDollarSign /> United States Dollar (USD)
                    </option>
                    <option value="EUR">
                        <FaEuroSign /> Euro (EUR)
                    </option>
                    <option value="INR">
                        <FaRupeeSign /> Indian Rupee (INR)
                    </option>
                    <option value="JPY">
                        <FaYenSign /> Japanese Yen (JPY)
                    </option>
                    <option value="GBP">
                        <FaPoundSign /> British Pound Sterling (GBP)
                    </option>
                    <option value="CHF">
                        <AiFillFlag /> Swiss Franc (CHF)
                    </option>
                    <option value="PKR">
                        <AiFillFlag /> Pakistani Rupee (PKR)
                    </option>
                    <option value="BDT">
                        <AiFillFlag /> Bangladeshi Taka (BDT)
                    </option>
                    <option value="NPR">
                        Nepalese Rupee (NPR)
                    </option>
                    <option value="BTN">
                        Bhutanese Ngultrum (BTN)
                    </option>
                    <option value="SGD">
                        Singapore Dollar (SGD)
                    </option>
                    <option value="LKR">
                        Sri Lankan Rupee (LKR)
                    </option>
                    <option value="AED">
                        Dubai Dirham (AED)
                    </option>
                    <option value="RUB">
                        Russian Ruble (RUB)
                    </option>
                    <option value="ILS">
                        Israeli New Shekel (ILS)
                    </option>
                    <option value="IRR">
                        Iranian Rial (IRR)
                    </option>
                </select>
                <span>To</span>
                <select
                    value={toCurrency}
                    onChange={(e) => setToCurrency(e.target.value)}
                >
                    <option value="USD">
                        <FaDollarSign /> United States Dollar (USD)
                    </option>
                    <option value="EUR">
                        <FaEuroSign /> Euro (EUR)
                    </option>
                    <option value="INR">
                        <FaRupeeSign /> Indian Rupee (INR)
                    </option>
                    <option value="JPY">
                        <FaYenSign /> Japanese Yen (JPY)
                    </option>
                    <option value="GBP">
                        <FaPoundSign /> British Pound Sterling (GBP)
                    </option>
                    <option value="CHF">
                        <AiFillFlag /> Swiss Franc (CHF)
                    </option>
                    <option value="PKR">
                        <AiFillFlag /> Pakistani Rupee (PKR)
                    </option>
                    <option value="BDT">
                        <AiFillFlag /> Bangladeshi Taka (BDT)
                    </option>
                    <option value="NPR">
                        Nepalese Rupee (NPR)
                    </option>
                    <option value="BTN">
                        Bhutanese Ngultrum (BTN)
                    </option>
                    <option value="SGD">
                        Singapore Dollar (SGD)
                    </option>
                    <option value="LKR">
                        Sri Lankan Rupee (LKR)
                    </option>
                    <option value="AED">
                        Dubai Dirham (AED)
                    </option>
                    <option value="RUB">
                        Russian Ruble (RUB)
                    </option>
                    <option value="ILS">
                        Israeli New Shekel (ILS)
                    </option>
                    <option value="IRR">
                        Iranian Rial (IRR)
                    </option>
                </select>
            </div>
            {result && <p id='result'>{result}</p>}
        </div>
        </>
    );
};

export default Converter;
