import localFont from 'next/font/local';

export const DMSans = localFont({
    src:[
        {
            path:'../assets/DMSans/DMSans-Regular.ttf',
            weight:'400',
            style:'normal',
        },
        {
            path:'../assets/DMSans/DMSans-Medium.ttf',
            weight:'500',
            style:'medium',
        },
        {
            path:'../assets/DMSans/DMSans-SemiBold.ttf',
            weight:'600',
            style:'semibold',
        },
        {
            path:'../assets/DMSans/DMSans-Bold.ttf',
            weight:'700',
            style:'bold',
        },
        {
            path:'../assets/DMSans/DMSans-ExtraBold.ttf',
            weight:'800',
            style:'extrabold',
        },
    ],
    variable:'--font-DM-Sans',
})