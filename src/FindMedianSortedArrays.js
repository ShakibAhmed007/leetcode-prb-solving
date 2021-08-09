/**
 * Problem
 * 
 */

const findMedianSortedArrays = function(nums1, nums2) {
    const mergedArr = [...nums1, ...nums2];
    mergedArr.sort();
    console.log(mergedArr);
    if(mergedArr.length % 2 !== 0){
        const data = mergedArr[Math.floor(mergedArr.length/2)];
        return data;
    }else{
        const index = mergedArr.length/2;
        const data = (mergedArr[index-1] + mergedArr[index] ) / 2;
        return data;
    }
};

const nums1 = [3];
const nums2 = [-2, -1];
console.log(findMedianSortedArrays(nums1, nums2));