//
//  MyModule.m
//  AlamiTest
//
//  Created by Imam Robani on 31/07/22.
//

#import <Foundation/Foundation.h>

#import "React/RCTBridgeModule.h"

@interface RCT_EXTERN_MODULE(MyModule,NSObject)

RCT_EXTERN_METHOD(increment: (RCTResponseSenderBlock)callback)
RCT_EXTERN_METHOD(getDeviceId: (RCTResponseSenderBlock)callbak)

@end
