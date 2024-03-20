const stripe = require('stripe')('sk_test_51K0hJzJbYdBDaeYY2aTX0RrbOo0pFMmLKJORwTFmIhWkUpgRTBTRHvvsnUAe4tzHrxY5yqBbI2QEcKQug8OGpUh900yVrPD3nD')

exports.handler = async (event) => {
    const {typeName, arguments} = event;
    if(typeName!= 'Mutation') {
        throw new Error('Request is not a mutation')
    }
    if(!arguments?.amount){
        throw new Error('Amount argument is required')
    }

    const paymentIntent = await stripe.paymentIntents.create({
        amount: arguments.amount,
        currency:'usd'
    })

    return{
        clientSecret: paymentIntent.client_secret,
    }
};
