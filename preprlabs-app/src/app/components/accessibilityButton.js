"use client";
import { useEffect, useState, useLayoutEffect } from "react";
import ScalingCard from "./scalingCard";
import AdjustmentButton from "./adjustmentButton";
import ColorCard from "./colorCard";
import DropdownCard from "./dropdownCard";



export default function AccessibilityButton(props) {
    const [toggle, setToggle] = useState(false);

    const [innerToggle, setInnerToggle] = useState(false);

    const [language, setLanguage] = useState('English');
    const [imageIcon, setImageIcon] = useState('united-states.png');

    const [searchBar, setSearchBar] = useState(false);
    
    const [switchSeizure, setSwitchSeizure] = useState(false);
    const [switchVision, setSwitchVision] = useState(false);
    const [switchADHD, setSwitchADHD] = useState(false);
    const [switchCognitive, setSwitchCognitive] = useState(false);
    const [switchKeyboard, setSwitchKeyboard] = useState(false);

    const [reset, setReset] = useState(false);
    
    useEffect(()=>{
        if(reset){
            setReset(false);
            setScale(100);
            setSwitchSeizure(false);
            setSwitchVision(false);
            setSwitchADHD(false);
            setSwitchCognitive(false);
            setSwitchKeyboard(false);
        }
    },[reset]);

    const [scale, setScale] = useState(100);

    const increaseScale = () => {
        if(scale < 200){
            setScale(scale + 1);
            // setCount(count + 10);
        }
    }

    const decreaseScale = () => {
        if(scale > 0){
            setScale(scale - 1);
        }
    }

    useEffect(()=>{
        document.body.style.zoom = `${scale}%`;
    }, [scale]);


    const viewBox = "0 0 1075 1024";

    const fontSizeSVG = "M529.034 824.719h132.332l-238.194-625.48H282.021L42.063 824.719h128.801l52.05-142.92h254.073l52.048 142.92zM349.949 334.216l86.455 236.429H263.493l86.455-236.429zm519.642 536.916a52.377 52.377 0 0 1-37.586-15.892L685.716 704.589c-20.152-20.756-19.666-53.919 1.091-74.071s53.919-19.666 74.071 1.091l55.214 56.858V333.301l-55.204 56.88c-20.152 20.76-53.315 21.255-74.076 1.106-20.756-20.149-21.253-53.312-1.106-74.072l144.097-148.464c9.861-10.163 23.419-15.899 37.581-15.9s27.725 5.731 37.591 15.891l146.284 150.651c20.152 20.755 19.666 53.919-1.091 74.073-20.751 20.154-53.919 19.666-74.071-1.089l-55.24-56.888v355.22l55.235-56.909c20.147-20.756 53.309-21.253 74.071-1.106 20.762 20.152 21.253 53.315 1.106 74.071L907.172 855.23a52.368 52.368 0 0 1-37.581 15.903z";

    const scalingSVG = "M1010.115 368.717c-30.899 0-55.946-25.049-55.946-55.948v-82.856L831.75 352.33c-21.847 21.849-57.272 21.849-79.119 0-21.852-21.849-21.852-57.273 0-79.122L875.045 150.79h-82.857c-30.899 0-55.946-25.049-55.946-55.948s25.047-55.948 55.946-55.948h217.928c30.899 0 55.946 25.049 55.946 55.948v217.927c0 30.899-25.047 55.948-55.946 55.948zM371.892 94.835c0 30.899-25.049 55.948-55.948 55.948h-82.856l122.418 122.418c21.849 21.849 21.849 57.273 0 79.122s-57.273 21.849-79.122 0L153.967 229.906v82.856c0 30.899-25.049 55.948-55.948 55.948s-55.948-25.049-55.948-55.948V94.836c0-30.899 25.049-55.948 55.948-55.948h217.926c30.899 0 55.948 25.049 55.948 55.948zM98.01 655.283c30.899 0 55.948 25.047 55.948 55.946v82.857l122.418-122.419c21.849-21.847 57.273-21.847 79.122 0 21.849 21.852 21.849 57.277 0 79.124L233.081 873.21h82.856c30.899 0 55.948 25.047 55.948 55.946s-25.049 55.946-55.948 55.946H98.01c-30.899 0-55.948-25.047-55.948-55.946V711.228c0-30.899 25.049-55.946 55.948-55.946zm638.226 273.864c0-30.899 25.047-55.946 55.946-55.946h82.857L752.62 750.782c-21.847-21.847-21.847-57.272 0-79.119 21.847-21.852 57.272-21.852 79.124 0l122.414 122.414V711.22c0-30.899 25.052-55.946 55.951-55.946s55.946 25.047 55.946 55.946v217.928c0 30.899-25.047 55.946-55.946 55.946H792.181c-30.899 0-55.946-25.047-55.946-55.946z";

    const readableFontSVG ="M647.772 817.874H518.344l-50.905-139.781H218.943l-50.907 139.781H42.063l234.69-611.749h138.053l232.966 611.749zM427.749 569.38l-84.558-231.242-84.558 231.242h169.116zm187.562-261.482c-29.901 0-54.139 24.239-54.139 54.138s24.238 54.138 54.139 54.138h396.616c29.896 0 54.134-24.239 54.134-54.138s-24.238-54.138-54.134-54.138H615.311zm73.319 175.909c-29.901 0-54.139 24.239-54.139 54.136 0 29.901 24.238 54.139 54.139 54.139h323.297c29.896 0 54.134-24.238 54.134-54.139 0-29.898-24.238-54.136-54.134-54.136H688.63zm67.01 175.91c-29.896 0-54.134 24.238-54.134 54.139 0 29.896 24.238 54.134 54.134 54.134h256.287c29.896 0 54.134-24.238 54.134-54.134 0-29.901-24.238-54.139-54.134-54.139H755.64z";

    const highlightTitlesSVG = "M881.254 0v146.041H631.536v644.364h-154.96V146.041h-249.72V0h654.397zm63.647 1024c30.172 0 54.63-24.458 54.63-54.63s-24.458-54.636-54.63-54.636H163.207c-30.172 0-54.631 24.463-54.631 54.636s24.459 54.63 54.631 54.63h781.694z";

    const highlightLinksSVG = "M1066.061 511.982c0 196.155-159.012 355.167-355.169 355.167-181.125 0-330.586-135.583-352.422-310.794h241.098c28.969 0 52.454-23.485 52.454-52.454s-23.485-52.454-52.454-52.454H360.863c28.731-167.318 174.515-294.634 350.029-294.634 196.157 0 355.169 159.015 355.169 355.169zM540.708 289.459c-28.969 0-52.454 23.485-52.454 52.454s23.484 52.454 52.454 52.454h88.289c47.672 0 94.694 44.184 94.694 109.533 0 65.352-47.022 109.532-94.694 109.532h-88.289c-28.969 0-52.454 23.485-52.454 52.454s23.484 52.454 52.454 52.454h88.289c114.867 0 199.603-100.864 199.603-214.441s-84.736-214.441-199.603-214.441h-88.289zM360.863 451.446a357.504 357.504 0 0 0-5.138 60.535c0 15.025.933 29.837 2.745 44.373H235.804c-28.969 0-52.454-23.485-52.454-52.454s23.485-52.454 52.454-52.454h125.06zm-125.06-161.987c-113.506 0-193.74 102.974-193.74 214.441s80.234 214.441 193.74 214.441h84.771c28.969 0 52.454-23.485 52.454-52.454s-23.485-52.454-52.454-52.454h-84.771c-42.554 0-88.832-42.071-88.832-109.532 0-67.459 46.278-109.533 88.832-109.533h84.771c28.969 0 52.454-23.484 52.454-52.454s-23.485-52.454-52.454-52.454h-84.771z";

    const alignCenterSVG = "M42.062 52.528C42.062 23.518 65.58 0 94.589 0h918.945c29.01 0 52.526 23.517 52.526 52.528s-23.516 52.528-52.526 52.528H94.589c-29.01 0-52.527-23.517-52.527-52.528zM195.22 358.842c0-29.01 23.517-52.528 52.528-52.528h612.627c29.015 0 52.531 23.518 52.531 52.528s-23.516 52.528-52.531 52.528H247.748c-29.01 0-52.528-23.517-52.528-52.528zM42.062 665.16c0-29.01 23.518-52.531 52.527-52.531h918.945c29.01 0 52.526 23.521 52.526 52.531s-23.516 52.526-52.526 52.526H94.589c-29.01 0-52.527-23.516-52.527-52.526zM195.22 971.474c0-29.01 23.517-52.531 52.528-52.531h612.627c29.015 0 52.531 23.521 52.531 52.531S889.39 1024 860.375 1024H247.748c-29.01 0-52.528-23.516-52.528-52.526z";
    
    const alignLeftSVG = "M42.062 52.82C42.062 23.648 65.71 0 94.882 0h918.361c29.174 0 52.818 23.648 52.818 52.82s-23.644 52.82-52.818 52.82H94.882c-29.172 0-52.82-23.648-52.82-52.82zm0 306.12c0-29.172 23.648-52.82 52.82-52.82h612.241c29.169 0 52.818 23.648 52.818 52.82s-23.649 52.82-52.818 52.82H94.882c-29.172 0-52.82-23.648-52.82-52.82zm0 306.122c0-29.174 23.648-52.823 52.82-52.823h918.361c29.174 0 52.818 23.649 52.818 52.823 0 29.169-23.644 52.818-52.818 52.818H94.882c-29.172 0-52.82-23.649-52.82-52.818zm0 306.12c0-29.174 23.648-52.823 52.82-52.823h612.241c29.169 0 52.818 23.649 52.818 52.823 0 29.169-23.649 52.818-52.818 52.818H94.882c-29.172 0-52.82-23.649-52.82-52.818z";
    
    const alignRightSVG = "M42.062 52.449C42.062 23.482 65.544 0 94.511 0h919.1c28.969 0 52.449 23.482 52.449 52.449s-23.48 52.449-52.449 52.449h-919.1c-28.967 0-52.449-23.482-52.449-52.449zM348.43 358.816c0-28.967 23.482-52.449 52.449-52.449h612.733c28.969 0 52.449 23.482 52.449 52.449s-23.48 52.449-52.449 52.449H400.879c-28.966 0-52.449-23.482-52.449-52.449zM42.062 665.185c0-28.969 23.482-52.449 52.449-52.449h919.1c28.969 0 52.449 23.48 52.449 52.449 0 28.964-23.48 52.449-52.449 52.449h-919.1c-28.967 0-52.449-23.485-52.449-52.449zM348.43 971.551c0-28.964 23.482-52.449 52.449-52.449h612.733c28.969 0 52.449 23.485 52.449 52.449 0 28.969-23.48 52.449-52.449 52.449H400.879c-28.966 0-52.449-23.48-52.449-52.449z";

    const lineHeightSVG = "M503.991 213.9c0-28.854 23.389-52.244 52.246-52.244h457.58c28.856 0 52.244 23.391 52.244 52.244s-23.388 52.244-52.244 52.244h-457.58c-28.856 0-52.246-23.39-52.246-52.244zm-.004 298.11c0-28.856 23.389-52.247 52.245-52.247h457.585c28.851 0 52.239 23.391 52.239 52.247 0 28.851-23.388 52.244-52.239 52.244H556.232c-28.856 0-52.245-23.393-52.245-52.244zm0 298.102c0-28.856 23.389-52.244 52.245-52.244h457.585c28.851 0 52.239 23.388 52.239 52.244 0 28.851-23.388 52.244-52.239 52.244H556.232c-28.856 0-52.245-23.393-52.245-52.244zM258.943 109.25a52.24 52.24 0 0 1 37.488 15.849l167.147 172.134c20.101 20.7 19.614 53.776-1.086 73.876s-53.776 19.614-73.876-1.086l-76.174-78.447V734.96l76.17-78.479c20.095-20.705 53.171-21.197 73.876-1.101s21.199 53.171 1.103 73.876L298.948 898.892c-9.838 10.132-23.359 15.857-37.484 15.857s-27.647-5.714-37.487-15.852L56.83 726.763c-20.101-20.7-19.614-53.775 1.086-73.876 20.7-20.096 53.776-19.61 73.876 1.091l76.161 78.433v-443.36l-76.156 78.466c-20.095 20.705-53.171 21.199-73.876 1.104s-21.199-53.171-1.103-73.876l164.643-169.636a52.243 52.243 0 0 1 37.484-15.858z";

    const letterSpacingSVG = "M93.304 187.725c28.3 0 51.242 22.942 51.242 51.242V785.04c0 28.298-22.942 51.241-51.242 51.241s-51.242-22.943-51.242-51.241V238.967c0-28.3 22.942-51.242 51.242-51.242zM905.38 510.924a51.226 51.226 0 0 1-15.544 36.767L742.467 690.79c-20.306 19.717-52.746 19.241-72.458-1.065-19.717-20.301-19.241-52.741 1.065-72.458l55.649-54.036H379.238l55.667 54.031c20.308 19.707 20.792 52.147 1.082 72.458-19.71 20.306-52.151 20.792-72.459 1.08L218.297 549.846a51.24 51.24 0 0 1-.009-73.535l147.37-143.1c20.303-19.715 52.744-19.238 72.459 1.065s19.238 52.744-1.065 72.459l-55.623 54.011h347.433l-55.644-54.004c-20.306-19.71-20.792-52.151-1.08-72.459s52.152-20.792 72.458-1.082l145.229 140.957a51.228 51.228 0 0 1 15.555 36.764zm160.681-271.957c0-28.3-22.938-51.242-51.241-51.242-28.298 0-51.241 22.942-51.241 51.242V785.04c0 28.298 22.943 51.241 51.241 51.241 28.303 0 51.241-22.943 51.241-51.241V238.967z";

    const darkContrastSVG = "M843.028 849.096c-284.657-62.444-497.701-316.083-497.701-619.483 0-24.263 1.367-48.234 4.033-71.835-100.749 77.775-165.516 199.713-165.516 336.63 0 234.705 190.266 424.975 424.97 424.975 86.548 0 167.03-25.82 234.214-70.287zm136.51-89.892c37.32 0 64.051 39.956 40.515 68.925C922.952 947.64 774.805 1024 608.815 1024c-292.483 0-529.589-237.107-529.589-529.592 0-222.018 136.619-412.127 330.375-490.844 41.294-16.777 76.268 28.796 63.273 71.432-14.908 48.912-22.927 100.828-22.927 154.617 0 292.484 237.107 529.591 529.592 529.591z";

    const lightContrastSVG = "M554.051 0c28.037 0 50.76 22.725 50.76 50.757v46.124c0 28.033-22.723 50.757-50.76 50.757-28.032 0-50.755-22.725-50.755-50.757V50.757C503.296 22.725 526.019 0 554.051 0zm0 286.011c-124.808 0-225.986 101.179-225.986 225.989s101.178 225.987 225.986 225.987c124.81 0 225.992-101.176 225.992-225.987S678.862 286.011 554.051 286.011zM226.55 512c0-180.875 146.628-327.503 327.501-327.503 180.879 0 327.506 146.628 327.506 327.503S734.93 839.501 554.051 839.501C373.178 839.501 226.55 692.874 226.55 512zm770.263-256.356c14.213 24.162 6.149 55.271-18.012 69.485l-39.209 23.062c-24.161 14.213-55.27 6.148-69.484-18.015s-6.149-55.271 18.017-69.484l39.204-23.062c24.161-14.213 55.27-6.148 69.484 18.014zm-885.485 0c14.213-24.162 45.322-32.227 69.485-18.014l39.206 23.062c24.162 14.213 32.227 45.322 18.014 69.484s-45.322 32.228-69.485 18.015l-39.205-23.062c-24.162-14.213-32.227-45.322-18.015-69.485zm126.705 438.183c14.213 24.161 6.148 55.27-18.014 69.484l-39.206 23.06c-24.162 14.213-55.271 6.149-69.485-18.012-14.213-24.166-6.148-55.276 18.015-69.489l39.205-23.06c24.162-14.213 55.271-6.149 69.485 18.017zm632.075 0c14.213-24.166 45.322-32.23 69.484-18.017l39.209 23.06c24.161 14.213 32.225 45.322 18.012 69.489-14.213 24.161-45.322 32.225-69.484 18.012l-39.204-23.06c-24.166-14.213-32.23-45.322-18.017-69.484zM554.051 876.36c28.037 0 50.76 22.728 50.76 50.76v46.121c0 28.037-22.723 50.76-50.76 50.76-28.032 0-50.755-22.723-50.755-50.76V927.12c0-28.032 22.723-50.76 50.755-50.76z";

    const highContrastSVG = "M554.051 0c28.037 0 50.76 22.725 50.76 50.757v46.124c0 28.033-22.723 50.757-50.76 50.757-28.032 0-50.755-22.725-50.755-50.757V50.757C503.296 22.725 526.019 0 554.051 0zm0 286.011c-124.808 0-225.986 101.179-225.986 225.989s101.178 225.987 225.986 225.987c124.81 0 225.992-101.176 225.992-225.987S678.862 286.011 554.051 286.011zM226.55 512c0-180.875 146.628-327.503 327.501-327.503 180.879 0 327.506 146.628 327.506 327.503S734.93 839.501 554.051 839.501C373.178 839.501 226.55 692.874 226.55 512zm770.263-256.356c14.213 24.162 6.149 55.271-18.012 69.485l-39.209 23.062c-24.161 14.213-55.27 6.148-69.484-18.015s-6.149-55.271 18.017-69.484l39.204-23.062c24.161-14.213 55.27-6.148 69.484 18.014zm-885.485 0c14.213-24.162 45.322-32.227 69.485-18.014l39.206 23.062c24.162 14.213 32.227 45.322 18.014 69.484s-45.322 32.228-69.485 18.015l-39.205-23.062c-24.162-14.213-32.227-45.322-18.015-69.485zm126.705 438.183c14.213 24.161 6.148 55.27-18.014 69.484l-39.206 23.06c-24.162 14.213-55.271 6.149-69.485-18.012-14.213-24.166-6.148-55.276 18.015-69.489l39.205-23.06c24.162-14.213 55.271-6.149 69.485 18.017zm632.075 0c14.213-24.166 45.322-32.23 69.484-18.017l39.209 23.06c24.161 14.213 32.225 45.322 18.012 69.489-14.213 24.161-45.322 32.225-69.484 18.012l-39.204-23.06c-24.166-14.213-32.23-45.322-18.017-69.484zM554.051 876.36c28.037 0 50.76 22.728 50.76 50.76v46.121c0 28.037-22.723 50.76-50.76 50.76-28.032 0-50.755-22.723-50.755-50.76V927.12c0-28.032 22.723-50.76 50.755-50.76z";

    const highSaturationSVG = "M600.448 25.866a54.539 54.539 0 0 0-92.785 0L243.01 454.098a375.146 375.146 0 0 0-34.597 72.305C123.718 766.229 295.517 1024 548.87 1024h10.373c253.353 0 425.149-257.772 340.454-497.597a375.201 375.201 0 0 0-34.596-72.305L600.448 25.866zm101.181 371.195c-2.852 2.882-5.765 5.911-8.796 9.062-23.27 24.196-53.402 55.526-114.698 81.796-102.809 44.059-178.74 25.407-216.865-17.703l192.785-311.942 147.574 238.788z";

    const monochromeSVG = "M596.429 23.621a49.799 49.799 0 0 0-84.729 0L244.309 456.283a373.714 373.714 0 0 0-34.466 72.034C125.414 767.39 296.731 1024 548.824 1024h10.486c252.093 0 423.409-256.609 338.98-495.683a373.75 373.75 0 0 0-34.468-72.034L596.43 23.621zm-267.39 485.027 225.027-364.111.538.875 4.419 778.983h-10.199c-179.175 0-308.014-184.648-245.059-362.911a274.289 274.289 0 0 1 25.275-52.836z";

    const lowSaturationSVG = "M598.979 25.04a52.797 52.797 0 0 0-89.821 0l-265.66 429.862a374.696 374.696 0 0 0-34.549 72.202C124.352 766.659 295.974 1024 548.864 1024h10.414c252.887 0 424.509-257.341 339.912-496.896a374.908 374.908 0 0 0-34.55-72.202L598.979 25.04zm-265.66 485.372L554.071 153.22 774.82 510.412a269.167 269.167 0 0 1 24.806 51.856 283.232 283.232 0 0 1 6.615 21.366c-53.402 5.596-110.316 30.556-179.666 99.907-89.533 89.533-218.868 98.166-319.196 58.271-19.039-55.096-20.709-117.693 1.133-179.543a269.108 269.108 0 0 1 24.806-51.856z";

    const muteSVG = "M1051.064 14.996c19.999 19.995 19.999 52.413 0 72.408L774.62 363.852c-.026.021-.046.042-.067.063L313.825 824.642c-.026.031-.053.056-.079.082l-184.281 184.279c-19.995 19.994-52.413 19.994-72.408 0s-19.995-52.413 0-72.407l103.402-103.404c-15.655-8.755-26.239-25.498-26.239-44.713v-460.8c0-28.277 22.923-51.2 51.2-51.2h216.803L712.978 98.905a51.198 51.198 0 0 1 76.601 44.453v60.712L978.655 14.994c19.994-19.995 52.413-19.995 72.407 0zM687.181 306.472v-74.886L441.225 372.133a51.196 51.196 0 0 1-25.402 6.746h-179.2v358.4h19.752l430.806-430.808zm51.2 223.448c28.278 0 51.2 22.922 51.2 51.2V972.8a51.195 51.195 0 0 1-76.601 44.452l-241.921-138.24c-24.551-14.029-33.081-45.302-19.052-69.852 14.029-24.556 45.305-33.085 69.858-19.052l165.315 94.464V581.12c0-28.278 22.922-51.2 51.2-51.2z";

    const hideImageSVG = "M794.332 14.996c-19.994 19.995-19.994 52.413 0 72.408l55.956 55.956-55.956 55.956c-19.994 19.995-19.994 52.413 0 72.408s52.413 19.995 72.407 0l55.956-55.956 55.956 55.956c19.994 19.995 52.413 19.995 72.407 0s19.994-52.413 0-72.408l-55.956-55.956 55.956-55.956c19.994-19.995 19.994-52.413 0-72.408s-52.413-19.995-72.407 0l-55.956 55.956-55.956-55.956c-19.994-19.995-52.413-19.995-72.407 0zm-649.87 179.565v487.393l147.216-117.775c17.411-13.926 41.833-14.986 60.385-2.616l107.089 71.393 201.164-160.935c21.77-17.415 53.473-14.213 71.322 7.203l139.863 167.842V419.841c0-28.277 22.922-51.2 51.2-51.2s51.2 22.923 51.2 51.2V926.72c0 53.729-43.551 97.28-97.28 97.28H139.343c-53.726 0-97.28-43.551-97.28-97.28V189.441c0-53.726 43.554-97.28 97.28-97.28h506.878c28.278 0 51.2 22.923 51.2 51.2s-22.922 51.2-51.2 51.2H144.463zm0 618.526V921.6H871.5V807.02L685.096 583.332l-191.21 152.97c-17.411 13.926-41.833 14.986-60.385 2.621L326.412 667.53l-181.95 145.556z";

    const linksSVG = "M904.228 161.83c-76.805-76.805-201.329-76.805-278.134 0L520.54 267.381c-20.349 20.351-53.346 20.351-73.697 0s-20.351-53.348 0-73.699L552.392 88.131c117.509-117.508 308.029-117.508 425.539 0s117.509 308.027 0 425.533L872.377 619.218c-20.352 20.352-53.345 20.352-73.697 0s-20.352-53.35 0-73.702l105.549-105.548c76.805-76.805 76.805-201.332 0-278.137zm-89.416 89.414c20.352 20.351 20.352 53.347.005 73.699L367.002 772.757c-20.351 20.352-53.348 20.352-73.699 0s-20.351-53.345 0-73.697l447.812-447.815c20.352-20.351 53.35-20.351 73.697 0zM309.444 404.783c20.351 20.351 20.351 53.348 0 73.699L203.893 584.033c-76.805 76.805-76.805 201.329 0 278.134 76.806 76.81 201.332 76.81 278.137 0l105.552-105.549c20.352-20.352 53.345-20.352 73.697 0s20.352 53.35 0 73.697L555.73 935.869c-117.509 117.509-308.028 117.509-425.536 0s-117.509-308.029 0-425.536l105.551-105.551c20.351-20.351 53.347-20.351 73.699 0z";

    const animationsSVG = "M612.562 2.758c20.966 7.132 35.072 26.823 35.072 48.972v324.857h283.013a51.732 51.732 0 0 1 46.408 28.877 51.737 51.737 0 0 1-5.407 54.389l-418.427 543.953c-13.507 17.556-36.69 24.566-57.658 17.434s-35.071-26.824-35.071-48.973V647.413H177.478a51.729 51.729 0 0 1-41.001-83.267L554.905 20.191C568.406 2.635 591.59-4.375 612.561 2.757zM282.529 543.959H512.22c28.57 0 51.727 23.158 51.727 51.727v224.497l261.647-340.141H595.906c-28.57 0-51.727-23.159-51.727-51.727V203.816l-261.65 340.143z";

    const focusSVG = "M554.061 677.335c89.702 0 162.417-72.714 162.417-162.417 0-89.698-72.714-162.414-162.417-162.414-89.697 0-162.413 72.716-162.413 162.414 0 89.702 72.716 162.417 162.413 162.417zM604.78 50.708C604.78 22.703 582.073 0 554.072 0c-28.006 0-50.709 22.703-50.709 50.708v92.886c-165.419 22.369-296.572 152.681-320.217 317.692H92.771c-28.005 0-50.708 22.703-50.708 50.708 0 28.007 22.702 50.709 50.708 50.709h89.587C203.715 730.46 335.995 863.58 503.35 886.22v87.071c0 28.006 22.7 50.708 50.706 50.708s50.708-22.702 50.708-50.708v-87.076c167.347-22.641 299.622-155.756 320.978-323.512h89.61c28.006 0 50.708-22.702 50.708-50.705 0-28.005-22.702-50.707-50.708-50.707h-90.394c-23.644-165-154.778-295.307-320.179-317.691V50.709zm-324.027 464.2c0-150.939 122.359-273.298 273.297-273.298s273.295 122.36 273.295 273.298S704.987 788.203 554.05 788.203 280.753 665.845 280.753 514.908z";



    const modal = (e) =>{
        if(e.target.id == 'modal'){
            setToggle(false);
            setInnerToggle(false);
        }
    }

    const innerModal = (e) =>{
        if(e.target.id == 'innerModal'){
            setInnerToggle(false);
        }
    }
    
    const changeLanguage = (e) => {
        if(e.target.id && e.target.value){
            setImageIcon(e.target.id + '.png');
            setLanguage(e.target.value);
        }
    }

    useEffect(()=>{
        if(toggle){
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [toggle]);


    return (
      <>
        <div className={!toggle ? 'bg-[#27AE60] w-[40px] h-[40px] flex flex-col justify-center rounded-full border border-black fixed translate-y-24 right-5 hover:cursor-pointer' : 'hidden'} onClick={()=> setToggle(true)}>
            <div className="flex justify-center">
                <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill="#FFFFFF" fillRule="evenodd" clipRule="evenodd"><path d="M7 9.866v2.392c-1.221 1.009-2 2.535-2 4.242 0 3.035 2.464 5.5 5.5 5.5 2.256 0 4.197-1.362 5.045-3.308l1.248 1.887c-1.338 2.058-3.658 3.421-6.293 3.421-4.14 0-7.5-3.361-7.5-7.5 0-2.876 1.622-5.376 4-6.634zm10 .134c.552 0 1 .448 1 1s-.448 1-1 1c-1.185 0-3.224.005-4 0 0 2.62 3.641.927 5.274 3.443.726 1.119 1.953 2.998 2.59 4.091.088.151.132.303.136.466.007.352-.174.711-.502.9-.23.132-.933.287-1.366-.366-.67-1.011-1.45-2.211-1.996-3.025-.782-1.166-1.308-1.459-4.136-1.509-2.039-.036-4-.43-4-3v-4c0-.531.21-1.039.586-1.414.375-.376.883-.586 1.414-.586.53 0 1.039.21 1.414.586.375.375.586.883.586 1.414v1h4zm-6-10c1.656 0 3 1.344 3 3s-1.344 3-3 3-3-1.344-3-3 1.344-3 3-3z"/></svg>
            </div>
        </div>
        <div id="modal" className={toggle ? 'fixed flex justify-center z-10 pt-100 left-0 top-0 w-full h-full' : 'hidden' } onClick={modal}>
            <div className={innerToggle ? 'bg-[#27AE60] fixed translate-y-36 right-5 w-11/12 sm:max-w-screen-sm h-[80vh] rounded-xl overflow-hidden' : 'bg-[#27AE60] fixed translate-y-36 right-5 w-11/12 sm:max-w-screen-sm h-[80vh] rounded-xl overflow-auto scrollbar-thin scrollbar-thumb-[#109326] scrollbar-track-slate-300 scrollbar-rounded-full'}>

                <div className="flex justify-between">
                    <img src="x-mark-white-240.png" className="w-[40px] h-[40px] m-3 hover:cursor-pointer hover:bg-[#5C5C5C] rounded" onClick={()=> setToggle(false)}/>

                    {/* Inner Modal */}
                    <div className="my-3 ml-3 mr-8 bg-[#27AE60] w-[125px] h-[30px] flex flex-col justify-center rounded-full">
                        <button className="h-[30px] rounded-full focus:outline focus:outline-[#639af9] focus:bg-[#109326] hover:bg-[#109326]" onClick={()=>setInnerToggle(true)}><img src={'flags/' + imageIcon} className="w-[20px] float-left ml-3" />{language}</button>
                    </div>

                    <div id="innerModal" className={innerToggle ? 'fixed flex justify-center z-10 pt-100 left-0 top-0 w-full h-full bg-black/30 rounded-xl' : 'hidden'} onClick={innerModal}>

                        <div className="bg-white fixed translate-y-36 w-11/12 h-[60vh] rounded-xl overflow-auto scrollbar-thin scrollbar-thumb-[#109326] scrollbar-track-slate-300 scrollbar-rounded-full">

                            <img src="x-mark-240.png" className="w-[30px] h-[30px] m-3 hover:cursor-pointer hover:bg-[#27AE60] hover:border hover:border-black rounded" onClick={()=> setInnerToggle(false)}/>
                            
                            <div>
                                <h3 className="text-center font-semibold text-xl">Choose the Interface Language</h3>
                            </div>
                            {/* ALL LANGUAGE BUTTONS */}
                            <div>
                                <div className="flex justify-evenly">

                                    <button id="united-states" value='English' className="bg-[#f2f7fa] w-[175px] p-3 my-2 border border-[#5C5C5C] hover:border-[#27AE60] font-semibold rounded-full hover:transition hover:eas-in-out hover:delay-200 hover:scale-110" onClick={changeLanguage}><img className="w-[25px] float-left mr-3" src="flags/united-states.png" />English</button>

                                    <button id="spain" value='Español' className="bg-[#f2f7fa] w-[175px] p-3 my-2 border border-[#5C5C5C] hover:border-[#27AE60] font-semibold rounded-full hover:transition hover:eas-in-out hover:delay-200 hover:scale-110" onClick={changeLanguage}><img className="w-[25px] float-left mr-3" src="flags/spain.png"  />Español</button>
                                </div>

                                <div className="flex justify-evenly">
                                    <button id="germany" value='Deutsch' className="bg-[#f2f7fa] w-[175px] p-3 my-2 border border-[#5C5C5C] hover:border-[#27AE60] font-semibold rounded-full hover:transition hover:eas-in-out hover:delay-200 hover:scale-110" onClick={changeLanguage}><img className="w-[25px] float-left mr-3" src="flags/germany.png"  />Deutsch</button>

                                    <button id="portugal" value='Português' className="bg-[#f2f7fa] w-[175px] p-3 my-2 border border-[#5C5C5C] hover:border-[#27AE60] font-semibold rounded-full hover:transition hover:eas-in-out hover:delay-200 hover:scale-110" onClick={changeLanguage}><img className="w-[25px] float-left mr-3" src="flags/portugal.png"  />Português</button>
                                </div>
                                <div className="flex justify-evenly">
                                    <button id="france" value='Français' className="bg-[#f2f7fa] w-[175px] p-3 my-2 border border-[#5C5C5C] hover:border-[#27AE60] font-semibold rounded-full hover:transition hover:eas-in-out hover:delay-200 hover:scale-110" onClick={changeLanguage}><img className="w-[25px] float-left mr-3" src="flags/france.png"  />Français</button>

                                    <button id="italy" value='Italiano' className="bg-[#f2f7fa] w-[175px] p-3 my-2 border border-[#5C5C5C] hover:border-[#27AE60] font-semibold rounded-full hover:transition hover:eas-in-out hover:delay-200 hover:scale-110" onClick={changeLanguage}><img className="w-[25px] float-left mr-3" src="flags/italy.png"  />Italiano</button>
                                </div>
                                <div className="flex justify-evenly">
                                    <button id="israel" value='עִברִית' className="bg-[#f2f7fa] w-[175px] p-3 my-2 border border-[#5C5C5C] hover:border-[#27AE60] font-semibold rounded-full hover:transition hover:eas-in-out hover:delay-200 hover:scale-110" onClick={changeLanguage}><img className="w-[25px] float-left mr-3" src="flags/israel.png"  />עִברִית</button>

                                    <button id="taiwan" value='繁體中文' className="bg-[#f2f7fa] w-[175px] p-3 my-2 border border-[#5C5C5C] hover:border-[#27AE60] font-semibold rounded-full hover:transition hover:eas-in-out hover:delay-200 hover:scale-110" onClick={changeLanguage}><img className="w-[25px] float-left mr-3" src="flags/taiwan.png"  />繁體中文</button>
                                </div>
                                <div className="flex justify-evenly">
                                    <button id="russia" value='Pyccкий' className="bg-[#f2f7fa] w-[175px] p-3 my-2 border border-[#5C5C5C] hover:border-[#27AE60] font-semibold rounded-full hover:transition hover:eas-in-out hover:delay-200 hover:scale-110" onClick={changeLanguage}><img className="w-[25px] float-left mr-3" src="flags/russia.png"  />Pyccкий</button>
                                    
                                    <button id="palestine" value='العربية' className="bg-[#f2f7fa] w-[175px] p-3 my-2 border border-[#5C5C5C] hover:border-[#27AE60] font-semibold rounded-full hover:transition hover:eas-in-out hover:delay-200 hover:scale-110" onClick={changeLanguage}><img className="w-[25px] float-left mr-3" src="flags/palestine.png"  />العربية</button>
                                </div>
                                <div className="flex justify-evenly">
                                    <button id="united-arab-emirates" value='العربية' className="bg-[#f2f7fa] w-[175px] p-3 my-2 border border-[#5C5C5C] hover:border-[#27AE60] font-semibold rounded-full hover:transition hover:eas-in-out hover:delay-200 hover:scale-110" onClick={changeLanguage}><img className="w-[25px] float-left mr-3" src="flags/united-arab-emirates.png"  />العربية</button>

                                    <button id="netherlands" value='Nederlands' className="bg-[#f2f7fa] w-[175px] p-3 my-2 border border-[#5C5C5C] hover:border-[#27AE60] font-semibold rounded-full hover:transition hover:eas-in-out hover:delay-200 hover:scale-110" onClick={changeLanguage}><img className="w-[25px] float-left mr-3" src="flags/netherlands.png"  />Nederlands</button>
                                </div>
                                <div className="flex justify-evenly">
                                    <button id="china" value='简体中文' className="bg-[#f2f7fa] w-[175px] p-3 my-2 border border-[#5C5C5C] hover:border-[#27AE60] font-semibold rounded-full hover:transition hover:eas-in-out hover:delay-200 hover:scale-110" onClick={changeLanguage}><img className="w-[25px] float-left mr-3" src="flags/china.png"  />简体中文</button>

                                    <button id="japan" value='日本語' className="bg-[#f2f7fa] w-[175px] p-3 my-2 border border-[#5C5C5C] hover:border-[#27AE60] font-semibold rounded-full hover:transition hover:eas-in-out hover:delay-200 hover:scale-110" onClick={changeLanguage}><img className="w-[25px] float-left mr-3" src="flags/japan.png"  />日本語</button>
                                </div>
                                <div className="flex justify-evenly">
                                    <button id="poland" value='Polski' className="bg-[#f2f7fa] w-[175px] p-3 my-2 border border-[#5C5C5C] hover:border-[#27AE60] font-semibold rounded-full hover:transition hover:eas-in-out hover:delay-200 hover:scale-110" onClick={changeLanguage}><img className="w-[25px] float-left mr-3" src="flags/poland.png"  />Polski</button>

                                    <button id="turkey" value='Türkçe' className="bg-[#f2f7fa] w-[175px] p-3 my-2 border border-[#5C5C5C] hover:border-[#27AE60] font-semibold rounded-full hover:transition hover:eas-in-out hover:delay-200 hover:scale-110" onClick={changeLanguage}><img className="w-[25px] float-left mr-3" src="flags/turkey.png"  />Türkçe</button>
                                </div>
                                <div className="flex justify-evenly">
                                    <button id="czech-republic" value='Čeština' className="bg-[#f2f7fa] w-[175px] p-3 my-2 border border-[#5C5C5C] hover:border-[#27AE60] font-semibold rounded-full hover:transition hover:eas-in-out hover:delay-200 hover:scale-110" onClick={changeLanguage}><img className="w-[25px] float-left mr-3" src="flags/czech-republic.png"  />Čeština</button>

                                    <button id="hungary" value='Magyar' className="bg-[#f2f7fa] w-[175px] p-3 my-2 border border-[#5C5C5C] hover:border-[#27AE60] font-semibold rounded-full hover:transition hover:eas-in-out hover:delay-200 hover:scale-110" onClick={changeLanguage}><img className="w-[25px] float-left mr-3" src="flags/hungary.png"  />Magyar</button>
                                </div>
                                <div className="flex justify-evenly">
                                    <button id="slovenia" value='Slovenščina' className="bg-[#f2f7fa] w-[175px] p-3 my-2 border border-[#5C5C5C] hover:border-[#27AE60] font-semibold rounded-full hover:transition hover:eas-in-out hover:delay-200 hover:scale-110" onClick={changeLanguage}><img className="w-[25px] float-left mr-3" src="flags/slovenia.png"  />Slovenščina</button>

                                    <button id="slovakia" value='Slovenčina' className="bg-[#f2f7fa] w-[175px] p-3 my-2 border border-[#5C5C5C] hover:border-[#27AE60] font-semibold rounded-full hover:transition hover:eas-in-out hover:delay-200 hover:scale-110" onClick={changeLanguage}><img className="w-[25px] float-left mr-3" src="flags/slovakia.png"  />Slovenčina</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <h3 className="text-center text-xl font-semibold text-white">Accessibility Adjustments</h3>
                </div>
                <div className="flex flex-col my-5">
                    <button className="bg-white text-[#27AE60] text-lg rounded-full w-3/4 h-[40px] mx-auto my-2 hover:transition hover:eas-in-out hover:delay-200 hover:scale-110" onClick={()=>setReset(true)}>Reset Settings</button>

                    <button className="bg-white text-[#27AE60] text-lg rounded-full w-3/4 h-[40px] mx-auto my-2 hover:transition hover:eas-in-out hover:delay-200 hover:scale-110">Statement</button>
                    
                    <button className="bg-white text-[#27AE60] text-lg rounded-full w-3/4 h-[40px] mx-auto my-2 hover:transition hover:eas-in-out hover:delay-200 hover:scale-110">Hide Interface</button>
                </div>
                <div className={searchBar ? 'w-11/12 mx-auto flex justify-center bg-white rounded-full' : 'w-11/12 mx-auto flex justify-center bg-[#109326] rounded-full'}>
                    <img src="search-240.png" className="w-[30px] p-2 object-contain rounded-l-full" />
                    <input type="text" onFocus={()=> setSearchBar(true)} onBlur={()=> setSearchBar(false)} className={searchBar ? 'rounded-r-full w-full border-0 focus:ring-0 bg-transparent' : 'rounded-r-full w-full border-0 focus:ring-0 bg-transparent text-white placeholder:text-white placeholder:text-sm'} placeholder="Unclear content? Search in dictionary..." />
                </div>

                {/* Toggle Profile Section (Switches) */}
                <div className="w-full bg-[#f2f3f8] mt-10 pb-5">
                    <div className="w-11/12 pb-5 -translate-y-4 lg:h-full mx-auto bg-white shadow-lg shadow-gray-500/40 border rounded-xl mt-3">
                        <h3 className="p-5">Choose the right accessibility profile for you!</h3>

                        <ul>
                            <li className="m-2 p-2 bg-[#f2f3f8] rounded-xl">
                                <div className="flex">
                                    <label className="inline-flex items-center p-1 cursor-pointer bg-gray-300 text-gray-800 rounded-full relative">
                                        <span className={!switchSeizure ? 'absolute bg-white w-1/2 h-full rounded-full transition ease-in-out -translate-x-1 delay-100' : 'absolute bg-[#109326] w-1/2 h-full rounded-full transition ease-in-out translate-x-16 delay-100'}></span>
                                        <input type="checkbox" className="hidden peer" onChange={()=>setSwitchSeizure(!switchSeizure)} />
                                        <span className="px-4 py-2 z-10 rounded-full">OFF</span>
                                        <span className={!switchSeizure ? 'px-4 py-2 z-10 rounded-full transition ease-in-out delay-100' : 'px-4 py-2 z-10 rounded-full text-white transition ease-in-out delay-100'}>ON</span>
                                    </label>

                                    <div className="px-5 hover:text-[#109326] hover:cursor-pointer">
                                        <h3 className="font-semibold text-sm">Seizure Safe Profile</h3>
                                        <p className="text-xs">Clear flashes and reduces color.</p>
                                    </div>
                                </div>
                                <div className={!switchSeizure ? 'hidden' : 'p-2'}>
                                    <p className="text-sm">This profile enables epileptic and seizure prone users to browse seafely by eliminating the risk of seizure that results from flashing or blinking animations and risky color combinations.</p>
                                </div>
                            </li>

                            <li className="m-2 p-2 bg-[#f2f3f8] rounded-xl">
                                <div className="flex">
                                    <label className="inline-flex items-center p-1 cursor-pointer bg-gray-300 text-gray-800 rounded-full relative">
                                        <span className={!switchVision ? 'absolute bg-white w-1/2 h-full rounded-full transition ease-in-out -translate-x-1 delay-100' : 'absolute bg-[#109326] w-1/2 h-full rounded-full transition ease-in-out translate-x-16 delay-100'}></span>
                                        <input type="checkbox" className="hidden peer" onChange={()=>setSwitchVision(!switchVision)} />
                                        <span className="px-4 py-2 z-10 rounded-full">OFF</span>
                                        <span className={!switchVision ? 'px-4 py-2 z-10 rounded-full transition ease-in-out delay-100' : 'px-4 py-2 z-10 rounded-full text-white transition ease-in-out delay-100'}>ON</span>
                                    </label>

                                    <div className="px-5 hover:text-[#109326] hover:cursor-pointer">
                                        <h3 className="font-semibold text-sm">Vision Impaired Profile</h3>
                                        <p className="text-xs">Enhances website's visuals.</p>
                                    </div>
                                </div>
                                <div className={!switchVision ? 'hidden' : 'p-2'}>
                                    <p className="text-base">This profile adjusts the website, so that it is accessible to the majority of visual impairments such as Degrading Eyesight, Tunnel Vision, Cataract, Glaucoma, and others.</p>
                                </div>
                            </li>
                            
                            <li className="m-2 p-2 bg-[#f2f3f8] rounded-xl">
                                <div className="flex">
                                    <label className="inline-flex items-center p-1 cursor-pointer bg-gray-300 text-gray-800 rounded-full relative">
                                        <span className={!switchADHD ? 'absolute bg-white w-1/2 h-full rounded-full transition ease-in-out -translate-x-1 delay-100' : 'absolute bg-[#109326] w-1/2 h-full rounded-full transition ease-in-out translate-x-16 delay-100'}></span>
                                        <input type="checkbox" className="hidden peer" onChange={()=>setSwitchADHD(!switchADHD)} />
                                        <span className="px-4 py-2 z-10 rounded-full">OFF</span>
                                        <span className={!switchADHD ? 'px-4 py-2 z-10 rounded-full transition ease-in-out delay-100' : 'px-4 py-2 z-10 rounded-full text-white transition ease-in-out delay-100'}>ON</span>
                                    </label>

                                    <div className="px-5 hover:text-[#109326] hover:cursor-pointer">
                                        <h3 className="font-semibold text-sm">ADHD Friendly Profile</h3>
                                        <p className="text-xs">More focus & fewer distractions.</p>
                                    </div>
                                </div>
                                <div className={!switchADHD ? 'hidden' : 'p-2'}>
                                    <p className="text-sm">This profile significantly reduces distractions to help people with ADHD and Neurodevelopment disorders browse, read, and focus on the essential elements of the website more easily.</p>
                                </div>
                            </li>

                            <li className="m-2 p-2 bg-[#f2f3f8] rounded-xl">
                                <div className="flex">
                                    <label className="inline-flex items-center p-1 cursor-pointer bg-gray-300 text-gray-800 rounded-full relative">
                                        <span className={!switchCognitive ? 'absolute bg-white w-1/2 h-full rounded-full transition ease-in-out -translate-x-1 delay-100' : 'absolute bg-[#109326] w-1/2 h-full rounded-full transition ease-in-out translate-x-16 delay-100'}></span>
                                        <input type="checkbox" className="hidden peer" onChange={()=>setSwitchCognitive(!switchCognitive)} />
                                        <span className="px-4 py-2 z-10 rounded-full">OFF</span>
                                        <span className={!switchCognitive ? 'px-4 py-2 z-10 rounded-full transition ease-in-out delay-100' : 'px-4 py-2 z-10 rounded-full text-white transition ease-in-out delay-100'}>ON</span>
                                    </label>

                                    <div className="px-5 hover:text-[#109326] hover:cursor-pointer">
                                        <h3 className="font-semibold text-sm">Cognitive Disability Profile</h3>
                                        <p className="text-xs">Assists with reading & focusing.</p>
                                    </div>
                                </div>
                                <div className={!switchCognitive ? 'hidden' : 'p-2'}>
                                    <p className="text-sm">This profile provides various features to help users with cognitive disabilities such as Autism, Dyslexia, CVA, and others to focus on the essential elements of the website more easily.</p>
                                </div>
                            </li>

                            <li className="m-2 p-2 bg-[#f2f3f8] rounded-xl">
                                <div className="flex">
                                    <label className="inline-flex items-center p-1 cursor-pointer bg-gray-300 text-gray-800 rounded-full relative">
                                        <span className={!switchKeyboard ? 'absolute bg-white w-1/2 h-full rounded-full transition ease-in-out -translate-x-1 delay-100' : 'absolute bg-[#109326] w-1/2 h-full rounded-full transition ease-in-out translate-x-16 delay-100'}></span>
                                        <input type="checkbox" className="hidden peer" onChange={()=>setSwitchKeyboard(!switchKeyboard)} />
                                        <span className="px-4 py-2 z-10 rounded-full">OFF</span>
                                        <span className={!switchKeyboard ? 'px-4 py-2 z-10 rounded-full transition ease-in-out delay-100' : 'px-4 py-2 z-10 rounded-full text-white transition ease-in-out delay-100'}>ON</span>
                                    </label>

                                    <div className="px-5 hover:text-[#109326] hover:cursor-pointer">
                                        <h3 className="font-semibold text-sm">Keyboard Navigation Profile</h3>
                                        <p className="text-xs">Use website with the keyboard.</p>
                                    </div>
                                </div>
                                <div className={!switchKeyboard ? 'hidden' : 'p-2'}>
                                    <p className="text-sm">This profile enables motor-impaired persons to operate the website using the keyboard Tab, Shift+Tab, and the Enter keys. Users can also use shortcuts such as "M" (menus), "H" (headings), "F" (forms), "B" (buttons), and "G" (graphics) to jump to specific elements.</p>
                                    <br/>
                                    <p className="text-sm"><span className="font-bold">Note:</span>This profile prompts automatically for keyboard users.</p>
                                </div>
                            </li>
                            
                            <li className="m-2 p-2 bg-[#f2f3f8] rounded-xl">
                                <div className="flex">
                                    <label className="inline-flex items-center p-1 cursor-pointer bg-gray-300 text-gray-800 rounded-full relative">
                                        <span className={!switchKeyboard ? 'absolute bg-white w-1/2 h-full rounded-full transition ease-in-out -translate-x-1 delay-100' : 'absolute bg-[#109326] w-1/2 h-full rounded-full transition ease-in-out translate-x-16 delay-100'}></span>
                                        <input type="checkbox" className="hidden peer" onChange={()=>setSwitchKeyboard(!switchKeyboard)} />
                                        <span className="px-4 py-2 z-10 rounded-full">OFF</span>
                                        <span className={!switchKeyboard ? 'px-4 py-2 z-10 rounded-full transition ease-in-out delay-100' : 'px-4 py-2 z-10 rounded-full text-white transition ease-in-out delay-100'}>ON</span>
                                    </label>

                                    <div className="px-5 hover:text-[#109326] hover:cursor-pointer">
                                        <h3 className="font-semibold text-sm">Blind Users (Screen Reader)</h3>
                                        <p className="text-xs">Optimizes website for screen-readers.</p>
                                    </div>
                                </div>
                                <div className={!switchKeyboard ? 'hidden' : 'p-2'}>
                                    <p className="text-sm">This profile adjusts the website to be compatible with screen-readers such as JAWS, NVDA, VoiceOver, and TalkBack. A screen-reader is software that is installed on the blind user's computer and smartphone, and websites should ensure compatibility with it.</p>
                                    <br/>
                                    <p className="text-sm"><span className="font-bold">Note:</span>This profile prompts automatically to screen-readers.</p>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div className="w-11/12 pb-5 lg:h-full mx-auto bg-white shadow-lg shadow-gray-500/40 border rounded-xl mt-3">
                        <h3 className="p-5">Content Adjustments</h3>

                        <ScalingCard title='Content Scaling' svg={scalingSVG} viewBox={viewBox} increase={increaseScale} decrease={decreaseScale} scaling={true} reset={reset}/>

                        <div className="flex">
                            <div className="w-1/2 pl-3">
                                <AdjustmentButton title='Readable Font' svg={readableFontSVG} viewBox={viewBox} reset={reset} />
                            </div>
                            <div className="w-1/2 pr-3">
                                <AdjustmentButton title='Highlight Titles' svg={highlightTitlesSVG} viewBox={viewBox} reset={reset} />
                            </div>
                        </div>

                        <div className="flex">
                            <div className="w-1/2 pl-3">
                                <AdjustmentButton title='Highlight Links' svg={highlightLinksSVG} viewBox={viewBox} reset={reset} />
                            </div>
                            <div className="w-1/2 pr-3">
                                <AdjustmentButton title='Align Center' svg={alignCenterSVG} viewBox={viewBox} reset={reset} />
                            </div>
                        </div>

                        <div className="flex">
                            <div className="w-1/2 pl-3">
                                <AdjustmentButton title='Align Left' svg={alignLeftSVG} viewBox={viewBox} reset={reset} />
                            </div>
                            <div className="w-1/2 pr-3">
                                <AdjustmentButton title='Align Right' svg={alignRightSVG} viewBox={viewBox} reset={reset} />
                            </div>
                        </div>
                        

                        <ScalingCard title='Adjust Font Sizing' svg={fontSizeSVG} viewBox={viewBox} increase={increaseScale} decrease={decreaseScale} scaling={false} reset={reset} />

                        <ScalingCard title='Adjust Line Height' svg={lineHeightSVG} viewBox={viewBox} increase={increaseScale} decrease={decreaseScale} scaling={false} reset={reset} />

                        <ScalingCard title='Adjust Letter Spacing' svg={letterSpacingSVG} viewBox={viewBox} increase={increaseScale} decrease={decreaseScale} scaling={false} reset={reset} />

                    </div>

                    <div className="w-11/12 pb-5 lg:h-full mx-auto bg-white shadow-lg shadow-gray-500/40 border rounded-xl mt-3">
                        <h3 className="p-5">Color Adjustments</h3>

                        <div className="flex">
                            <div className="w-1/2 pl-3">
                                <AdjustmentButton title='Dark Contrast' svg={darkContrastSVG} viewBox={viewBox} reset={reset} />
                            </div>
                            <div className="w-1/2 pr-3">
                                <AdjustmentButton title='Light Contrast' svg={lightContrastSVG} viewBox={viewBox} reset={reset} />
                            </div>
                        </div>

                        <div className="flex">
                            <div className="w-1/2 pl-3">
                                <AdjustmentButton title='Dark Contrast' svg={highContrastSVG} viewBox={viewBox} reset={reset} />
                            </div>
                            <div className="w-1/2 pr-3">
                                <AdjustmentButton title='Light Contrast' svg={highSaturationSVG} viewBox={viewBox} reset={reset} />
                            </div>
                        </div>

                        <ColorCard title='Adjust Text Colors' />

                        <div className="flex">
                            <div className="w-1/2 pl-3">
                                <AdjustmentButton title='Monochrome' svg={monochromeSVG} viewBox={viewBox} reset={reset} />
                            </div>
                            <div className="w-1/2 pr-3">
                                <AdjustmentButton title='Low Saturation' svg={lowSaturationSVG} viewBox={viewBox} reset={reset} />
                            </div>
                        </div>

                        <ColorCard title='Adjust Title Colors' />
                        <ColorCard title='Adjust Background Colors' />

                    </div>

                    <div className="w-11/12 pb-5 lg:h-full mx-auto bg-white shadow-lg shadow-gray-500/40 border rounded-xl mt-3">
                        <h3 className="p-5">Orientation Adjustments</h3>

                        <div className="flex">
                            <div className="w-1/2 pl-3">
                                <AdjustmentButton title='Mute Sounds' svg={muteSVG} viewBox={viewBox} reset={reset} />
                            </div>
                            <div className="w-1/2 pr-3">
                                <AdjustmentButton title='Hide Images' svg={hideImageSVG} viewBox={viewBox} reset={reset} />
                            </div>
                        </div>

                        <DropdownCard title='Useful Links' svg={linksSVG} viewBox={viewBox} />

                        <div className="flex">
                            <div className="w-1/2 pl-3">
                                <AdjustmentButton title='Stop Animations' svg={animationsSVG} viewBox={viewBox} reset={reset} />
                            </div>
                            <div className="w-1/2 pr-3">
                                <AdjustmentButton title='Highlight Focus' svg={focusSVG} viewBox={viewBox} reset={reset} />
                            </div>
                        </div>

                    </div>
                </div>

                <div className="flex flex-col justify-center h-[40px]">
                    <h3 className="text-white text-center">Web Accessibility By <span className="font-semibold">accessiBe</span> Learn More &gt;</h3>
                </div>
            </div>
            
        </div>
        
      </>
    );
  }
