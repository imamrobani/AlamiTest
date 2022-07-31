//
//  MyModule.swift
//  AlamiTest
//
//  Created by Imam Robani on 31/07/22.
//

import Foundation

@objc(MyModule)
class MyModule: NSObject{
  
  private var count = 0;
  
  @objc
  func increment(_ callback:RCTResponseSenderBlock){
    count += 1;
    callback([count])
  }
  
  @objc
  func getDeviceId(_ callback:RCTResponseSenderBlock){
    if let uuid = UIDevice.current.identifierForVendor?.uuidString {
        print(uuid)
        callback([uuid])
    }
  }
  
  @objc
  static func requiresMainQueueSetup() ->Bool{
    return true;
  }
  
  @objc
  func constantsToExport() -> [String: Any]!{
    return ["InitiacalCount": 0]
  }
}
