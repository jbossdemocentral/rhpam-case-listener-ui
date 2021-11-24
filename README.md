
# Case Listener UI Project

This is a simple quarkus UI application, that can be used to demonstrate the case listener behavior using kafka. The incoming case events are read from a kafka topic and shown on a simple reactive UI.

Pre requisites: For demonstrating the UI behavior, the case listener must first be registered with the case project. The case listener can be found at 
https://github.com/snandakumar87/cas-events-listener

To execute to the UI project:

mvn quarkus:dev

the UI can be found at http://localhost:8582/ListenerUI.html

Any case actions then start showing up events as below. 

![image](https://user-images.githubusercontent.com/39506194/143231884-94db330b-5008-487e-86d1-a8f28bbbf9e7.png)

![image](https://user-images.githubusercontent.com/39506194/143231902-e655b876-7509-46b3-8ae4-870443d135ec.png)


For the complete blog post of how to: https://snandaku.medium.com/auditing-case-management-executions-with-kafka-and-red-hat-process-automation-manager-kie-ccb669f20db4
