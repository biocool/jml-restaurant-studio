const assert=require('assert'),fs=require('fs'),J=require('./core.js');
const tests=[
[{address:'11940 Bernardo Plaza Dr, San Diego, CA 92128',city:'San Diego',zip:'92128'},'11940 Bernardo Plaza Dr, San Diego, CA 92128'],
[{address:'5680 La Jolla Blvd',city:'La Jolla',zip:'92037'},'5680 La Jolla Blvd, La Jolla, 92037'],
[{address:'690 Newport Center Drive',city:'Newport Beach',zip:'92660'},'690 Newport Center Drive, Newport Beach, 92660'],
[{address:'123 Main St, San Diego CA 92128-1234',city:'San Diego',zip:'92128'},'123 Main St, San Diego CA 92128-1234'],
[{address:'',city:'San Diego',zip:'92128'},'San Diego, 92128']];
for(let [r,want] of tests){assert.equal(J.formatAddress(r),want);assert.equal(J.formatAddress({...r,address:want}),want)}
const rs=JSON.parse(fs.readFileSync(__dirname+'/data/records.json')),before=JSON.stringify(rs);for(let r of rs){const a=J.formatAddress(r);assert.equal(J.formatAddress({...r,address:a}),a);for(let kind of ['flyer','audit'])assert(J.render(r,kind,{flyer:'<head></head><body></body>',audit:'<head></head><body></body>'}).includes(JSON.stringify(a)))}assert.equal(JSON.stringify(rs),before);console.log('PASS234 display addresses, idempotence, flyer/audit payload, source immutability, city-in-street and ZIP+4');
