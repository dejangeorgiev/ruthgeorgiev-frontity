import React from "react";
import {connect, styled} from "frontity";
import tw from 'tailwind.macro';

const PinterestIcon = ({}) => {

    return (
        <Icon>
            <svg version="1.1" id="Layer_5" xmlns="http://www.w3.org/2000/svg"
                 x="0px" y="0px"
                 width="30px" height="30px" viewBox="0 0 512 512" enableBackground="new 0 0 512 512">
                <path fillRule="evenodd" clipRule="evenodd" fill="#CA2026" d="M343.87,496.375c-2.336,1.328-4.984,2.125-7.86,2.125
	c-8.844,0-16-7.156-16-16c0-6.969,4.445-12.828,10.688-15.031l-0.156-0.422c87.011-30.751,149.474-113.501,149.474-211.045
	c0-123.712-100.3-224.018-224.015-224.018S31.985,132.29,31.985,256.002c0,78.544,40.525,147.513,101.698,187.481
	c4.688,2.688,10.047,4.267,15.805,4.267c13.602,0,25.149-8.517,29.782-20.485c5.704-16.828,10.368-33.25,12.719-43.266
	c3.227-13.547,10.532-46.875,14.047-62.97c0.414-2.047,0.711-4.109,0.711-6.281c0-3.844-0.75-7.516-2-10.922
	c-4.758-12.484-13.094-36.484-13.094-51.598c0-33.204,16.391-60.219,40.345-60.219c20.376,0,32.001,21.672,32.001,39.985
	c0,20.492-12,47.004-18.711,75.363c-5.617,23.767,11.266,44.657,34.712,44.657c42.446,0,79.994-50.438,79.994-120.021
	c0-49.079-43.845-87.993-103.995-87.993c-67.955,0-112.003,49.407-112.003,112.001c0,19.512,6.984,37.34,16,47.996
	c4.148,4.906,7.664,7.641,6.156,13.266c-1.078,4.125-1.539,5.063-4.555,9.985c-3.086,5-6.102,7.703-11.211,5.609
	c-31.306-12.782-38.392-46.329-38.392-84.864c0-61.618,45.564-135.993,152.004-135.993c76.034,0,128.004,57.063,128.004,119.993
	c0,83.879-48.313,152.005-104.003,152.005c-14.922,0-30.188-3.047-41.564-8.828c-1.953-0.875-4.125-1.422-6.438-1.422
	c-7,0-12.922,4.547-15.071,10.797c-3.836,15.078-8.359,32.859-9.868,38.297c-2.031,7.344-5.062,14.859-8.438,22.188
	c-10.579,20.72-32.001,34.985-56.885,34.985c-11.695,0-22.586-3.297-32.024-8.797C46.962,425.687,0,346.39,0,256.002
	C0,114.618,114.613,0,256,0c141.387,0,256,114.618,256,256.002C512,366.483,441.912,460.484,343.87,496.375L343.87,496.375z
	 M272,480.016c8.845,0,16.001,7.156,16.001,16c0,8.828-7.156,15.984-16.001,15.984c-8.844,0-16-7.156-16-15.984
	C256,487.172,263.156,480.016,272,480.016L272,480.016z"/>
            </svg>
        </Icon>
    );
};

export default connect(PinterestIcon);

const Icon = styled('div')` ${tw`inline-block`}`;