# Viewer #
The subtree of the «/viewer» node provides all data about the instance of dizmoViewer currently running and allows dizmos to store that should be made available to other dizmos running in this dizmoViewer instance (private subtree) as well as providing access to information shared with the world (public subtree).     Access to this information is provided by the access methods of the viewer object:

`viewer.getAttribute("<path>");`
`viewer.setAttribute("<path>");`
`viewer.privateStorage.getProperty("<path>"[{<options>}]);`
`viewer.privateStorage.setProperty("<path>"[{<options>}]);`
`viewer.publicStorage.getProperty("<path>"[{<options>}]);`
`viewer.publicStorage.setProperty("<path>"[{<options>}]);`

For more information have a look at the chapters about «Data Tree» and «Persistence» in the developers documentation.
## Attributes ##
The subtree of the «/viewer/attributes» node provides all kinds of information about the instance of dizmoViewer currently running. Access this information using `viewer.getAttribute("[info-path]");`
### Audio ###
Please find the details about audio recording at <a href="http://test.dizmo.com/docs/topics/audio">http://test.dizmo.com/docs/topics/audio</a>
#### Codec ####
Codec of the audio stream. This can only be set when recording is stopped.
  * **write**: True
  * **type**: string
  * **default**: audio/pcm
  * **subscribable**: True
  * **dizmojs_version**
    * 0: 1.3
    * 1: 1.4
#### Recording ####
Information from the audio recorder, if any recording is active
  * **write**: False
  * **type**: boolean
  * **default**: False
  * **subscribable**: True
  * **dizmojs_version**
    * 0: 1.3
    * 1: 1.4
#### Samplerate ####
Sample rate of the audio stream (values per second). This can only be set, when recording is stopped
  * **write**: True
  * **type**: integer
  * **default**: 8000
  * **subscribable**: True
  * **dizmojs_version**
    * 0: 1.3
    * 1: 1.4
#### Samplesize ####
Sample size of the audio data stream in bits. This can only be set, when the recording is stopped.
  * **write**: True
  * **type**: Integer
  * **range**
    * 0: 8
    * 1: 16
  * **default**: 16
  * **subscribable**: True
  * **dizmojs_version**
    * 0: 1.3
    * 1: 1.4
#### Stream ####
Provides base64 encoded audio data as a string. To access the audio information subscribe to this data tree node. This node is only subscribable as it is a stream of data.
  * **write**: False
  * **type**: string
  * **subscribable**: True
  * **dizmojs_version**
    * 0: 1.3
    * 1: 1.4
#### Supported ####
Returns all supported settings for the currently selected audio recording device as a json
  * **write**: False
  * **type**: String
  * **example**: {<devicename>:{"channels":["1","2","3","4"],"codecs":["audio/pcm"],"samplerates":["8000","44100","48000"],"samplesizes":["8","16","24"]}}
  * **subscribable**: False
  * **dizmojs_version**
    * 0: 1.3
    * 1: 1.4
### Childdizmos ###
An array of dizmoIDs of all dizmos located on the viewer surface directly
  * **write**: False
  * **type**: [string]
  * **range**: hexstring
  * **example**
    * 0: h3753bff70b74d672524fa570f2fa2567
    * 1: hd4413a56a4c5c72f4ad24528757f9850
  * **prev-path**: /dizmos
  * **subscribable**: True
  * **default**: []
  * **dizmojs_version**
    * 0: 1.3
    * 1: 1.4
### Geometry ###
This subtree of the «/viewer/attributes» node provides information about geometry of the surface provided by dizmoViewer. Access these items using `viewer.getAttribute("geometry/[info]");`
#### Angle ####
The rotation at which the surface of dizmoViewer is currently displayed.
  * **write**: True
  * **type**: integer
  * **range**: 0..360
  * **default**: 0
  * **subscribable**: True
  * **dizmojs_version**
    * 0: 1.3
    * 1: 1.4
#### Height ####
The height of the rectangle of the dizmoViewer surface currently visible.
In order to get the height of the window in which dizmoViewer renders its content in pixels, just multiply this value with the «zoom» factor. If the view is set to «full screen» this corresponds to the height of the screen.
  * **write**: False
  * **type**: integer
  * **subscribable**: True
  * **dizmojs_version**
    * 0: 1.3
    * 1: 1.4
#### Width ####
The width of the rectangle of the dizmoViewer surface currently visible.  In order to get the width of the window in which dizmoViewer renders its content in pixels, just multiply this value with the «zoom» factor. If the view is set to «full screen» this corresponds to the width of the screen.
  * **write**: False
  * **type**: integer
  * **subscribable**: False
  * **dizmojs_version**
    * 0: 1.3
    * 1: 1.4
#### Windowheight ####
The current height of the dizmo application window
  * **write**: False
  * **type**: integer
  * **subscribable**: True
  * **dizmojs_version**
    * 0: 1.3
    * 1: 1.4
#### Windowwidth ####
The current width of the dizmo application window
  * **write**: False
  * **type**: integer
  * **subscribable**: True
  * **dizmojs_version**
    * 0: 1.3
    * 1: 1.4
#### ~~Workspaceheight~~ ####
Deprecated, has been moved to «/viewer/attributes/globalSettings/Viewer_WorkspaceHeight»  ~~The current height of the workspace~~    ~~
  * **write**: False
  * **type**: number
  * **subscribable**: False
#### ~~Workspacewidth~~ ####
Deprecated, has been moved to «/viewer/attributes/globalSettings/Viewer_WorkspaceWidth»  ~~The current width of the workspace~~    ~~
  * **write**: False
  * **type**: number
  * **subscribable**: False
#### X ####
The x coordinate of the center of the rectangle of the dizmoViewer surface currently being displayed
  * **write**: True
  * **type**: integer
  * **range**: -3000..3000
  * **default**: 0
  * **subscribable**: True
  * **dizmojs_version**
    * 0: 1.3
    * 1: 1.4
#### Y ####
The y coordinate of the center of the rectangle of the dizmoViewer surface currently being displayed
  * **write**: True
  * **type**: integer
  * **range**: -3000..3000
  * **default**: 0
  * **subscribable**: True
  * **dizmojs_version**
    * 0: 1.3
    * 1: 1.4
#### Zoom ####
The zoom level used to render the currently visible part of the dizmoViewer surface
  * **write**: True
  * **type**: float
  * **range**: 0.1..10
  * **default**: 1
  * **subscribable**: True
  * **dizmojs_version**
    * 0: 1.3
    * 1: 1.4
### Globalsettings ###
This subtree of the «/viewer/attributes» node provides access to all the values read from the basic settings file of dizmoViewer (GlobalSettings.xml). Access them using `viewer.getAttribute("globalSettings/[setting]");` For more information about the items available in this subtree have a look at the documentation of the GlobalSettings.xml file. Please be aware, that some values are not available in any case. In example Store_HostUrl and Synchro_HostUrl are only available, when they are set in the GlobalSettings.xml by the user.
  * **subscribable**: True
#### Store_Hosturl ####
The URL of the server to be used to get new or updated dizmos.
  * **write**: False
  * **type**: string
  * **default**: store-api.dizmo.com
  * **subscribable**: True
  * **dizmojs_version**
    * 0: 1.3
    * 1: 1.4
#### Synchro_Hosturl ####
The URL of the server to be used to save and laod dizmo setups
  * **write**: False
  * **type**: string
  * **default**: synchro-api.dizmo.com
  * **subscribable**: True
  * **dizmojs_version**
    * 0: 1.3
    * 1: 1.4
#### ... ####
There a re many more settings items available in this subtree. For more information have a look at the documentation of the GlobalSettings.xml file.
### Product ###
This subtree of the «/viewer/attributes» node provides all kinds of information about the instance of dizmoViewer currently running. Access them using `viewer.getAttribute("product/[info]");`
#### Compiledate ####
The date and time when the instance of dizmoViewer running was compiled in the format dd.mm.yy hh.mm.
  * **write**: False
  * **type**: string
  * **example**: 18.12.14 14:54
  * **subscribable**: False
  * **dizmojs_version**
    * 0: 1.3
    * 1: 1.4
#### Installeddizmojsversions ####
An array proving the versions of the dizmoJS library installed on the instance of dizmoViewer running
  * **write**: False
  * **type**: [string]
  * **example**
    * 0: 1.0
    * 1: 1.1
  * **subscribable**: False
  * **dizmojs_version**
    * 0: 1.3
    * 1: 1.4
#### Installedelementsversions ####
An array proving the versions of the dizmoElements library installed on the instance of dizmoViewer running
  * **write**: False
  * **type**: [string]
  * **example**
    * 0: 1.0
  * **subscribable**: False
  * **dizmojs_version**
    * 0: 1.3
    * 1: 1.4
#### Installedhelperversions ####
An array proving the versions of the dizmoHelper library installed on the instance of dizmoViewer running
  * **write**: False
  * **type**: [string]
  * **example**
    * 0: 1.0
  * **subscribable**: False
  * **dizmojs_version**
    * 0: 1.3
    * 1: 1.4
#### Installedthemes ####
An array proving the visual themes installed on the instance of dizmoViewer running
  * **write**: False
  * **type**: [string]
  * **example**
    * 0: Default
  * **subscribable**: False
  * **dizmojs_version**
    * 0: 1.3
    * 1: 1.4
#### Libraries ####
A string proving the Qt and rendering library versions used in the instance of dizmoViewer running
  * **write**: False
  * **type**: string
  * **example**: 'Qt 5.3.1' 'WebKit 538.1'
  * **subscribable**: False
  * **dizmojs_version**
    * 0: 1.3
    * 1: 1.4
#### Licensedto ####
The name of the person or organization the instance of dizmoViewer running was licensed to
  * **write**: True
  * **type**: string
  * **example**: John Doe
  * **prev-path**: /viewer/licenseTo
  * **subscribable**: True
  * **dizmojs_version**
    * 0: 1.3
    * 1: 1.4
#### Licensekey ####
Let the dizmo set a serial number as license key for the current running dizmo space.
  * **write**: True
  * **read**: False
  * **type**: string
  * **subscribable**: True
  * **dizmojs_version**
    * 0: 1.3
    * 1: 1.4
#### Licensestring ####
The type of license under which the current instance of dizmoViewer is running
  * **write**: False
  * **type**: string
  * **subscribable**: True
  * **dizmojs_version**
    * 0: 1.3
    * 1: 1.4
#### Treeversion ####
The version of the storage tree the instance of dizmoViewer running provides.
  * **write**: False
  * **type**: string
  * **example**: 1.1
  * **subscribable**: False
  * **dizmojs_version**
    * 0: 1.3
    * 1: 1.4
#### Version ####
The version string of the instance of dizmoViewer running in a human readable format
  * **write**: False
  * **type**: string
  * **example**: 1.0r2 Build 760
  * **subscribable**: False
  * **dizmojs_version**
    * 0: 1.3
    * 1: 1.4
#### Versionstring ####
The version of the instance of dizmoViewer running as a machine readable string composed of four integers separated by dots.     These numbers indicate major version, minor version, development state (100: alpha, 200: beta, 300: release candidate, 400: release) and subversion plus the build number.
  * **write**: False
  * **type**: string
  * **example**: 1.0.402.760
  * **subscribable**: False
  * **dizmojs_version**
    * 0: 1.3
    * 1: 1.4
### Settings ###
This subtree of the «/viewer/attributes» node provides all kinds of parameters about the current configuration of dizmoViewer. Access them using `viewer.getAttribute("settings/[setting]");`
#### Animationduration ####
The duration in milliseconds for the transition animation to turn a dizmo from its front to its back and vice versa.
  * **write**: True
  * **type**: integer
  * **range**: 50..3000
  * **default**: 500
  * **subscribable**: True
  * **dizmojs_version**
    * 0: 1.3
    * 1: 1.4
#### Backgroundcolor ####
The webcolor of the dizmoViewer surface.
Up to API V1.1 and version 1.1 of dizmoViewer the order of the values was ARGB (#ffafc809 as a default)
<a href="http://test.dizmo.com/docs/topics/color">Details</a>
  * **write**: True
  * **type**: string
  * **range**: color
  * **default**: #e6e6e6ff
  * **subscribable**: True
  * **dizmojs_version**
    * 0: 1.3
    * 1: 1.4
#### Backgroundimage ####
The URL of the current background image used to draw the surface of dizmoViewer. The image will be tiled if its size is smaller than the size of the surface.
  * **write**: True
  * **type**: string
  * **range**: URL
  * **default**:
  * **example**: file:///Users/jdoe/Pictures/myBackground.png
  * **subscribable**: True
  * **dizmojs_version**
    * 0: 1.3
    * 1: 1.4
#### Developmentmode ####
A boolean indicating the status of the development mode currently set for dizmoViewer
  * **write**: True
  * **type**: boolean
  * **range**
    * 0: true
    * 1: false
  * **default**: false
  * **example**: false
  * **subscribable**: True
  * **dizmojs_version**
    * 0: 1.4
#### Displaymode ####
A string indicating the display mode currently set for dizmoViewer
  * **write**: True
  * **type**: string
  * **range**
    * 0: edit
    * 1: presentation
  * **default**: edit
  * **example**: development
  * **subscribable**: True
  * **dizmojs_version**
    * 0: 1.3
    * 1: 1.4
#### Fullscreen ####
A boolean indicating whether or not dizmoViewer is shown full screen or in a window
  * **write**: True
  * **type**: boolean
  * **subscribable**: True
  * **default**: False
  * **dizmojs_version**
    * 0: 1.3
    * 1: 1.4
#### Keyboardvisible ####
A boolean indicating whether or not dizmoViewer shows the system keyboard
  * **write**: True
  * **type**: boolean
  * **subscribable**: True
  * **default**: False
  * **dizmojs_version**
    * 0: 1.4
#### Language ####
The two character ISO 639-1 code of language currently selected
  * **write**: True
  * **type**: string
  * **example**: en
  * **subscribable**: True
  * **dizmojs_version**
    * 0: 1.3
    * 1: 1.4
#### Linkacceptmode ####
The mode for accepting dizmoLive connections. If set to "askuser" dizmoViewer will ask the user before accepting an incoming dizmoLive connection. If set to "silentlive" dizmoViewer will accept any incoming dizmoLive connection immediately. If set to "donotdisturb" dizmoViewer will decline any incoming connections immediately.
  * **write**: True
  * **type**: string
  * **range**
    * 0: askuser
    * 1: silentlive
    * 2: donotdisturb
  * **default**: askuser
  * **subscribable**: True
  * **dizmojs_version**
    * 0: 1.3
    * 1: 1.4
#### Mimetypes ####
##### [Mimetype] #####
This is the MIME type for which the available bundleIds are specified. This table is maintained by dizmoViewer based on information coming from Info.plists
###### Defaultbundleid ######
The bundleId of the dizmo to be used by default for this kind of MIME type
  * **write**: True
  * **type**: string
  * **subscribable**: True
  * **dizmojs_version**
    * 0: 1.3
    * 1: 1.4
###### Bundleids ######
This is an unordered array of bundleIds of dizmos that can handle a specific MIME type. This list is maintained by dizmoViewer based on Information coming from dizmos Info.plists.
  * **write**: False
  * **type**: [string]
  * **subscribable**: True
  * **dizmojs_version**
    * 0: 1.3
    * 1: 1.4
#### Showguides ####
A boolean indicating wether or not dizmoViewer does supply the supporting guiding lines to align dizmos
  * **write**: True
  * **type**: boolean
  * **subscribable**: True
  * **default**: True
  * **dizmojs_version**
    * 0: 1.3
    * 1: 1.4
#### Themeid ####
The Id of of the theme currently in use
  * **write**: True
  * **type**: string
  * **default**: Default
  * **subscribable**: True
  * **dizmojs_version**
    * 0: 1.3
    * 1: 1.4
#### Uiscaling ####
A factor by which the viewer should scale its UI elements (menus, buttons, dialogs).    http://test.dizmo.com/docs/topics/uiscaling
  * **write**: True
  * **type**: float
  * **range**: 0.5..2
  * **default**: 1
  * **subscribable**: True
  * **dizmojs_version**
    * 0: 1.3
    * 1: 1.4
#### Username ####
The username provided when logging in to dizmoViewer
  * **write**: False
  * **type**: string
  * **default**: default
  * **subscribable**: False
  * **dizmojs_version**
    * 0: 1.3
    * 1: 1.4
### System ###
This subtree of the «/viewer/attributes» node provides all kinds of information about the platform on which dizmoViewer is currently running. Access them using `viewer.getAttribute("system/[info]");`
#### Nonadmininstall ####
This flag is set to true if dizmoViewer has been installed without administrative rights, i.e. if it has user access rights only. This information is typically used for support purposes.
  * **write**: False
  * **type**: boolean
  * **subscribable**: False
  * **dizmojs_version**
    * 0: 1.3
    * 1: 1.4
#### Closestcity ####
The name of the city closest to the location of the device on which dizmoViewer is running
  * **write**: False
  * **type**: string
  * **example**: Zuerich
  * **subscribable**: True
  * **dizmojs_version**
    * 0: 1.3
    * 1: 1.4
#### Dizmoallocatedmemory ####
The number of bytes of main physical memory currently allocated to dizmoViewer
  * **write**: False
  * **type**: integer
  * **example**: 275415040
  * **subscribable**: False
  * **dizmojs_version**
    * 0: 1.3
    * 1: 1.4
#### Dizmousedmemory ####
The number of bytes of main physical memory currently used by dizmoViewer
  * **write**: False
  * **type**: integer
  * **example**: 275341312
  * **subscribable**: False
  * **dizmojs_version**
    * 0: 1.3
    * 1: 1.4
#### Freesystemmemory ####
The number of bytes of main physical memory available for use on the underlying hardware (real or virtual)
  * **write**: False
  * **type**: integer
  * **example**: 804442112
  * **subscribable**: False
  * **dizmojs_version**
    * 0: 1.3
    * 1: 1.4
#### Geolocation ####
##### Latitude #####
The latitude of the current location of the device on which dizmoViewer is running (-90 indicating the south pole, 90 indicating the north pole)
  * **write**: False
  * **type**: float
  * **example**: 47.367347
  * **subscribable**: True
  * **dizmojs_version**
    * 0: 1.3
    * 1: 1.4
##### Longitude #####
The longitude of the current location of the device on which dizmoViewer is running (>0 indicating east of Greenwich, >0 west of Greenwich)
  * **write**: False
  * **type**: float
  * **example**: 8.5500025
  * **subscribable**: True
  * **dizmojs_version**
    * 0: 1.3
    * 1: 1.4
#### Ipv4Address ####
The IPv4 address of the device on which this instance of dizmoViewer is running in Dot-decimal notation. Cleared from self loops, peer2peer and inactive connections.
  * **write**: False
  * **type**: [string]
  * **example**
    * 0: 192.168.0.3
  * **subscribable**: True
  * **dizmojs_version**
    * 0: 1.3
    * 1: 1.4
#### Ipv6Address ####
The IPv6 address of the device on which this instance of dizmoViewer is running in Colon-hex notation. Cleared from self loops, peer2peer and inactive connections.
  * **write**: False
  * **type**: [string]
  * **example**
    * 0: fe80::344d:6e34:bc92:4abf%10
    * 1: fe80::64d5:792:ffeb:bf3f%23
    * 2: fe80::819e:9c33:87d3:4a%24
  * **subscribable**: True
  * **dizmojs_version**
    * 0: 1.3
    * 1: 1.4
#### Lastbackuptime ####
The time of the last workspace backup stored for the current user in seconds since epoch
  * **write**: False
  * **type**: float
  * **example**: 1486113066
  * **subscribable**: True
  * **dizmojs_version**
    * 0: 1.3
    * 1: 1.4
#### Logicaldpi ####
Provides the dpi of the screen currently set in the OS. This is not the same as the actual resolution of the screen hardware. This is used to autoscale all UI elements drawn by the viewer (menus, buttons, dialogs). The automatic scaling factor to draw UI elements is calculated as logicalDpi / 96.

http://test.dizmo.com/docs/topics/uiscaling
  * **write**: False
  * **type**: integer
  * **subscribable**: True
  * **dizmojs_version**
    * 0: 1.3
    * 1: 1.4
#### Online ####
Indicates if the underlying hard- and software has a connection to the Internet. true if the connection is available and working. This is updated whenever the value is requested.

<a href="http://test.dizmo.com/docs/topics/online">Detail</a>
  * **write**: False
  * **type**: boolean
  * **subscribable**: False
  * **dizmojs_version**
    * 0: 1.3
    * 1: 1.4
#### Opengl ####
Indicates if the underlying hard- and software support rendering based on openGL
  * **write**: False
  * **type**: boolean
  * **subscribable**: False
  * **dizmojs_version**
    * 0: 1.3
    * 1: 1.4
#### Openglversion ####
Provides the version of openGL (if available) running on the underlying hard- and software
  * **write**: False
  * **type**: string
  * **example**: 3.2
  * **subscribable**: False
  * **dizmojs_version**
    * 0: 1.3
    * 1: 1.4
#### Operatingsystem ####
A string describing the type and version of the operating system on which dizmoViewer is currently running
  * **write**: False
  * **type**: string
  * **examples**: Mac OS X 10.8
  * **subscribable**: False
  * **dizmojs_version**
    * 0: 1.3
    * 1: 1.4
#### Systemarchitecture ####
The architecture for which the running version of dizmoViewer has been compiled for
  * **write**: False
  * **type**: string
  * **examples**: macosx
  * **subscribable**: False
  * **dizmojs_version**
    * 0: 1.3
    * 1: 1.4
#### Systemmemory ####
The number of bytes of main physical memory installed in the underlying hardware (real or virtual)
  * **write**: False
  * **type**: integer
  * **example**: 8589934592
  * **subscribable**: False
  * **dizmojs_version**
    * 0: 1.3
    * 1: 1.4
### ~~Liveconnections~~ ###
~~Subtree to get data about available live hosts and connections~~ Deprecated, has been moved to «remoteHosts»
#### ~~[Remotehostid]~~ ####
~~A unique identifier like the IP address, the reverse lookup name or the host name of another dizmoViewer instance that is connected or can be connected to the local dizmoViewer instance. Don't make any assumptions about the format of this Id as it might change in the future.~~    Depreciated, has been moved to «remoteHosts»
##### ~~Dizmos~~ #####
An array of dizmoIDs of the dizmos currently transmitting from and to the other dizmoViewer if there is currently is an open connection.
  * **write**: False
  * **example**
    * 0: h3753bff70b74d672524fa570f2fa2567
    * 1: hd4413a56a4c5c72f4ad24528757f9850
  * **prev-path**: /viewer/openLiveConnections/dizmos
  * **subscribable**: True
##### ~~Hostname~~ #####
The host name of the other dizmoViewer. This string is usually grabbed from the operating system.
  * **write**: False
  * **type**: String
  * **example**: local.otherComputer
  * **prev-path**: /viewer/openLiveConnections/hostName
  * **subscribable**: True
##### ~~Ipv4Address~~ #####
The IPv4 address of the device on which the remote instance of dizmoViewer is running in Dot-decimal notation.
  * **write**: False
  * **example**
    * 0: 192.168.0.3
    * 1: 192.168.57.1
  * **subscribable**: False
##### ~~Ipv4Livehub~~ #####
This field provides the IPv4 address of the gateway that is or has to be used to connect to the remote host. If the remote dizmoViewer instance is available using a direct LAN connection this is set to "127.0.0.1" (localhost).
  * **write**: False
  * **example**
    * 0: 127.0.0.1
    * 1: 198.51.100.1
  * **subscribable**: False
##### ~~Ipv6Address~~ #####
The IPv6 address of the device on which the remote instance of dizmoViewer is running in Colon-hex notation.
  * **write**: False
  * **example**
    * 0: 2001:0db8:85a3:08d3:1319:8a2e:0370:1234/64
    * 1: 2001:0db8:85a3:08d3:1319:8a2e:0370:5342/64
  * **subscribable**: False
##### ~~Ipv6Livehub~~ #####
This field provides the IPv6 address of the dizmoLive hub that is or has to be used to connect to the remote host. If the remote dizmoViewer instance is available using a direct LAN connection this is set to "::1" (localhost).
  * **write**: False
  * **example**
    * 0: ::1
    * 1: 2001:0db8:85a3:08d3:1319:8a2e:0370:7347/64
  * **subscribable**: False
##### ~~Status~~ #####
This item provides the status of the connection. The states provided should be self explaining.
  * **write**: False
  * **type**: String
  * **range**
    * 0: closed
    * 1: connecting
    * 2: open
    * 3: closing
  * **example**: connecting
  * **subscribable**: True
##### ~~Time~~ #####
The time of the latest connection status change.
  * **write**: False
  * **example**: 1234567890
  * **prev-path**: /viewer/openLiveConnections/time
  * **subscribable**: True
##### ~~Username~~ #####
Name of the user that has signed in on the remote dizmoViewer.
  * **write**: False
  * **type**: String
  * **example**: kkratzenstein
  * **prev-path**: /viewer/openLiveConnections/userName
  * **subscribable**: True
### ~~Setup~~ ###
~~This subtree of the «/viewer/attributes» node provides information about the setup that has last been stored / loaded. Access them using `viewer.getAttribute("setup/[info]");`~~    ~~
  * **subscribable**: True
#### ~~Id~~ ####
The id of the current setup. This will change after «Load», «Save», «Clear» and «Rename» Empty string if cleared.
  * **write**: False
  * **type**: string
  * **default**:
  * **subscribable**: True
#### ~~Name~~ ####
The name of the setup given to it by its owner  The dizmoID of the person who created and therefore owns a setup. Ownership will not be changed if someone else with the right to write back to a shared setup has saved an updated version.
  * **write**: False
  * **type**: string
  * **default**:
  * **subscribable**: True
#### ~~Owner~~ ####
~~The dizmoID of the person who created and therefore owns a setup. Ownership will not be changed if someone else with the right to write back to a shared setup has saved an updated version.
  * **write**: False
  * **type**: string
  * **default**:
  * **subscribable**: True
## Public ##
Nodes stored in this part of the viewer tree will be accessible from the network in *the future*.  Use `viewer.publicStorage().getProperty("[anypath]")` to access such a global node. The URL to access a public node at "/viewer/public/mypath/node" will be something like "http://host.example.com:3418/viewer/public/mypath/node". This will either be made available through AJAX or potentially by providing access functions like getPropertyHttp("10.0.5.22:3418", "/viewer/public/mypath/node");
## Private ##
Nodes stored in this part of the viewer tree will be accessible for all dizmos that are instantiated locally. Use `viewer.privateStorage().getProperty("[anypath]")` to access such a local node.
# Dizmos #
The subtree of the «/dizmos» node provides access to the data about all the dizmos instantiated in the dizmoViewer currently running. It does so by providing one node for every dizmo using the dizmoID as its name. Each of these dizmo nodes provides three subtrees providing attributes of a dizmo as well as access to its public and private data. Data in the private subtree can only be accessed by the dizmo that hold this node while data in the public subtree can be accessed by any dizmo that has access to that part of the data tree.
Access to a dizmos information is provided by the following access methods:

`dizmo.getAttribute("<path>");`
`dizmo.setAttribute("<path>");`
`dizmo.privateStorage.getProperty("<path>"[{<options>}]);`
`dizmo.privateStorage.setProperty("<path>"[{<options>}]);`
`dizmo.publicStorage.getProperty("<path>"[{<options>}]);`
`dizmo.publicStorage.setProperty("<path>"[{<options>}]);`

For more information have a look at the chapters about «Data Tree» and «Persistence» in the developers documentation.
## [Dizmoid] ##
The name of this node is a dizmoID that is used to identify a particular instance of a dizmo. This is a hex string that might look like "h3753bff70b74d672524fa570f2fa2567". So the name of the node given here is just an example. In an actual environment expect there to be several of these nodes but all of them sharing the same structure as shown this example.
### Attributes ###
The subtree of the «/dizmos/[dizmoID]/attributes» node provides all kinds of information about the particular instance of a dizmo. Access this information using `dizmo.getAttribute("[info-path]");`
#### Absolutegeometry ####
This subtree of the «/dizmos/[dizmoID]/attributes» node provides information about absolute geometry of the dizmo. These values are based on a coordinate system that is given by the workspace. Access these items using `"dizmo.getAttribute(absoluteGeometry/[info]");
##### Angle #####
The rotation at which the dizmo is displayed on the surface of dizmoViewer, relative to the viewer. A value of «0» means the dizmo is dawn upright relative to the dizmo viewer.
  * **write**: False
  * **type**: integer
  * **default**: 0
  * **subscribable**: True
  * **range**: 0..360
  * **dizmojs_version**
    * 0: 1.3
    * 1: 1.4
##### Height #####
The height of the rectangle of the dizmo in pixels in relation to the dizmo space.
  * **write**: False
  * **type**: integer
  * **subscribable**: True
  * **dizmojs_version**
    * 0: 1.3
    * 1: 1.4
##### Width #####
The width of the rectangle of the dizmo in pixels in relation to the dizmo space.
  * **write**: False
  * **type**: integer
  * **subscribable**: True
  * **dizmojs_version**
    * 0: 1.3
    * 1: 1.4
##### X #####
The x coordinate of the top left of the rectangle of the dizmo relative to the dizmo space.
  * **write**: False
  * **type**: integer
  * **subscribable**: True
  * **dizmojs_version**
    * 0: 1.3
    * 1: 1.4
##### Y #####
The y coordinate of the top left of the rectangle of the dizmo relative to the dizmo space.
  * **write**: False
  * **type**: integer
  * **subscribable**: True
  * **dizmojs_version**
    * 0: 1.3
    * 1: 1.4
##### Zoom #####
The zoom factor used to render the dizmo in relation to the dizmo space.
  * **write**: False
  * **type**: float
  * **default**: 1
  * **subscribable**: True
  * **dizmojs_version**
    * 0: 1.3
    * 1: 1.4
#### Bundleid ####
The bundleID of the bundle used to create this dizmo instance. This can be used to access more information about this dizmo by accessing `bundle.getAttributes("version");`
  * **write**: False
  * **type**: string
  * **example**: com.dizmo.example
  * **subscribable**: False
  * **dizmojs_version**
    * 0: 1.3
    * 1: 1.4
#### Childdizmos ####
An array of dizmoIDs of all dizmos located on this dizmo directly
  * **write**: False
  * **type**: [string]
  * **range**: hexstring
  * **example**
    * 0: h3753bff70b74d672524fa570f2fa2567
    * 1: hd4413a56a4c5c72f4ad24528757f9850
  * **subscribable**: True
  * **default**: []
  * **dizmojs_version**
    * 0: 1.3
    * 1: 1.4
#### Connection ####
##### Direction #####
This item indicated if and how a dizmo is being shared via dizmoLive. It can have one of the following three values:  * "outgoing" if the dizmo initiated the connection (i.e. was part of a connection that opened or if it was dragged onto a sharing parent dizmo later)  * "incoming" if the dizmo was created based on data that was coming in  * "" (an empty string) if the dizmo is not being shared via a live connection
  * **write**: False
  * **type**: string
  * **default**:
  * **subscribable**: True
  * **dizmojs_version**
    * 0: 1.3
    * 1: 1.4
##### Remotehostid #####
This item contains the Id of the remote host from or to which a connection is active (see state/connected/direction). If there is no open connection this item is an empty string.
  * **write**: False
  * **type**: string
  * **default**:
  * **subscribable**: True
  * **dizmojs_version**
    * 0: 1.3
    * 1: 1.4
#### Created ####
The time when the dizmo was created (instantiated) in milliseconds since midnight of January 1, 1970, according to UTC time. Use    `d = new Date(parseInt(dizmo.getAttribute("created")));`    to get a date object representing the creation time.
  * **write**: False
  * **type**: integer
  * **example**: 1420987102320
  * **subscribable**: False
  * **dizmojs_version**
    * 0: 1.3
    * 1: 1.4
#### Dockeddizmos ####
An array of dizmoIDs of all dizmos docked to this dizmo directly
  * **write**: False
  * **type**: [string]
  * **range**: hexstring
  * **example**
    * 0: h96753bff70b74d672524fa570f2fa25ca3
    * 1: h21413a56a4c5c72f4ad24528757f989a
  * **subscribable**: True
  * **default**: []
  * **dizmojs_version**
    * 0: 1.3
    * 1: 1.4
#### Geometry ####
This subtree of the «/dizmos/[dizmoID]/attributes» node provides information about geometry of the dizmo.  These values are based on the coordinate system that is given by the parent dizmo. Access these items using `dizmo.getAttribute("geometry/[info]");`
##### Front #####
###### Height ######
The height of the rectangle of the dizmo front in pixels
  * **write**: True
  * **type**: integer
  * **range**: 50..4000
  * **subscribable**: True
  * **dizmojs_version**
    * 0: 1.4
###### Width ######
The width of the rectangle of the dizmo front in pixels
  * **write**: True
  * **type**: integer
  * **range**: 65..4000
  * **subscribable**: True
  * **dizmojs_version**
    * 0: 1.4
##### Back #####
###### Height ######
The height of the rectangle of the dizmo back in pixels. When not set, the dizmo viewer uses the front values also for the back side
  * **write**: True
  * **type**: integer
  * **range**: 50..4000
  * **subscribable**: True
  * **dizmojs_version**
    * 0: 1.4
###### Width ######
The width of the rectangle of the dizmo back in pixels. When not set, the dizmo viewer uses the front values also for the back side
  * **write**: True
  * **type**: integer
  * **range**: 65..4000
  * **subscribable**: True
  * **dizmojs_version**
    * 0: 1.4
##### Angle #####
The rotation at which the dizmo is displayed on the surface of dizmoViewer. A value of «0» means the dizmo is dawn upright relative to the parent dizmo.
  * **write**: True
  * **type**: integer
  * **range**: 0..360
  * **default**: 0
  * **subscribable**: True
  * **dizmojs_version**
    * 0: 1.3
    * 1: 1.4
##### Height #####
The current height of the rectangle of the dizmo in pixels. Is either the front or the back side value, related to the current state of the dizmo.
  * **write**: True
  * **type**: integer
  * **range**: 50..4000
  * **subscribable**: True
  * **dizmojs_version**
    * 0: 1.3
    * 1: 1.4
##### Maxheight #####
The maximum height of the dizmo content in pixels. The user using the resize handle, cannot make the dizmo larger in height than this value
  * **write**: True
  * **type**: integer
  * **range**: 50..4000
  * **subscribable**: True
  * **dizmojs_version**
    * 0: 1.3
    * 1: 1.4
##### Maxwidth #####
The maximum width of the dizmo content in pixels. The user using the resize handle, cannot make the dizmo larger in width than this value
  * **write**: True
  * **type**: integer
  * **range**: 65..4000
  * **subscribable**: True
  * **dizmojs_version**
    * 0: 1.3
    * 1: 1.4
##### Minheight #####
The minimal height of the dizmo content in pixels. The user using the resize handle, cannot make the dizmo smaller in height than this value
  * **write**: True
  * **type**: integer
  * **range**: 50..4000
  * **subscribable**: True
  * **dizmojs_version**
    * 0: 1.3
    * 1: 1.4
##### Minwidth #####
The minimal width of the dizmo content in pixels. The user using the resize handle, cannot make the dizmo smaller in width than this value
  * **write**: True
  * **type**: integer
  * **range**: 65..4000
  * **subscribable**: True
  * **dizmojs_version**
    * 0: 1.3
    * 1: 1.4
##### Width #####
The current width of the rectangle of the dizmo in pixels. Is either the front or the back side value, related to the current state of the dizmo.
  * **write**: True
  * **type**: integer
  * **range**: 65..4000
  * **subscribable**: True
  * **dizmojs_version**
    * 0: 1.3
    * 1: 1.4
##### X #####
The x coordinate of the top left of the rectangle of the dizmo relative to the parent dizmo. The range is only checked if the dizmo does not have a parent. In general it is recommended to use dizmo.setPostion(x, y) instead of manipulating this attribute directly.    <a href="http://test.dizmo.com/docs/topics/position">Details</a>
  * **write**: True
  * **type**: integer
  * **range**: -3000..3000
  * **subscribable**: True
  * **dizmojs_version**
    * 0: 1.3
    * 1: 1.4
##### Y #####
The y coordinate of the top left of the rectangle of the dizmo relative to the parent dizmo. The range is only checked if the dizmo does not have a parent.  In general it is recommended to use dizmo.setPostion(x, y) instead of manipulating this attribute directly.    <a href="http://test.dizmo.com/docs/topics/position">Details</a>
  * **write**: True
  * **type**: integer
  * **range**: -3000..3000
  * **subscribable**: True
  * **dizmojs_version**
    * 0: 1.3
    * 1: 1.4
##### Zoom #####
The zoom factor used to render the dizmo on the dizmoViewer surface. A value of 1 means the dizmo is drawn the way it has been described by the original HTML and CSS code
  * **write**: True
  * **type**: float
  * **range**: 0.1..10
  * **default**: 1
  * **subscribable**: True
  * **dizmojs_version**
    * 0: 1.3
    * 1: 1.4
#### Lasterror ####
The last raised error code from this dizmo.
  * **write**: False
  * **type**: integer
  * **default**: 0
  * **subscribable**: True
  * **dizmojs_version**
    * 0: 1.3
    * 1: 1.4
#### Modified ####
The time when some data of the dizmo (like position, data, ...) was last modified in milliseconds since midnight of January 1, 1970, according to UTC timeUse    `d = new Date(parseInt(dizmo.getAttribute("modified")));`    to get a date object representing the creation time.
  * **write**: False
  * **example**: 1420987102320
  * **subscribable**: False
  * **type**: integer
  * **dizmojs_version**
    * 0: 1.3
    * 1: 1.4
#### Parentdizmo ####
The dizmoID of the dizmo on which this one is located. Empty string if this is the dizmoViewer surface. Setting a new parent is possible but restricted by several criteria to ensure conceptual & visual integrity of the dizmos on the surface, have a look at the documentation about setting the parent for more detailed information.
  * **write**: True
  * **example**: h2753bff704c4d672524fa570f2fa28af
  * **subscribable**: True
  * **default**:
  * **type**: string
  * **dizmojs_version**
    * 0: 1.3
    * 1: 1.4
#### Settings ####
This subtree of the «/dizmos/[dizmoID]/attributes» node provides information about the settings of the dizmo mostly controlled by the user. Access these items using `dizmo.getAttribute("settings/[info]");`
##### ~~Backgroundcolor~~ #####
The webcolor of the dizmo background. This is duplicate of frameColor. Up to API V1.1 and version 1.1 of dizmoViewer the order of the values was ARGB (#ffafc809 as a default)

deprecated  ~~ use frameColor~~ instead
  * **write**: True
  * **type**: String
  * **default**: #afc809ff
##### ~~Backgroundimage~~ #####
The URL of the current background image used to draw the dizmo. The image will be tiled if its size is smaller than the size of the surface

deprecated ~~ use frameImage~~ instead
  * **write**: True
  * **type**: String
  * **default**:
  * **example**: file:///Users/jdoe/Pictures/myBackground.png
##### Framecolor #####
The webcolor currently used to draw the frame of the dizmo. Up to API V1.1 and version 1.1 of dizmoViewer the order of the values was ARGB (#ffafc809 as a default)

<a href="http://test.dizmo.com/docs/topics/color">Details</a>
  * **write**: True
  * **type**: string
  * **range**: color
  * **default**: #e6e6e6ff
  * **subscribable**: True
  * **dizmojs_version**
    * 0: 1.3
    * 1: 1.4
##### Frameimage #####
The URL of the current background image used to draw the frame of the dizmo
  * **write**: True
  * **type**: string
  * **range**: URL
  * **default**:
  * **example**: file:///Users/jdoe/Pictures/myBackground.png
  * **subscribable**: True
  * **dizmojs_version**
    * 0: 1.3
    * 1: 1.4
##### Frameopacity #####
The opacity used to draw the frame of the dizmo. This a percentage given as a number between 0 and 1 where 1 means the dizmo's frame os fully opaque, i.e. intransparent
  * **write**: True
  * **type**: float
  * **range**: 0.15..1
  * **default**: 1
  * **subscribable**: True
  * **dizmojs_version**
    * 0: 1.3
    * 1: 1.4
##### Icondarkimage #####
The URI of the icon of this dizmo instance to be used on a «dark» background. In most cases this will be equal to the URI of the bundle «dark icon» but it can be changed by the dizmo
  * **write**: True
  * **type**: string
  * **range**: URL
  * **default**: bundle://assets/Icon-dark.svg
  * **subscribable**: True
  * **dizmojs_version**
    * 0: 1.3
    * 1: 1.4
##### Iconimage #####
The URI of the icon of this dizmo instance. In most cases this will be equal to the URI of the bundle icon. However this URI can be changed by the dizmo to display an alert for example
  * **write**: True
  * **type**: string
  * **range**: URL
  * **default**: bundle://assets/Icon.svg
  * **subscribable**: True
  * **dizmojs_version**
    * 0: 1.3
    * 1: 1.4
##### Removefadetime #####
The time in milliseconds to remove a dizmo from the current setup. Set this to be longer the more data will be lost when a dizmo is removed. I.e. right after instantiating a dizmo this value can be close to zero. The more data has been entered or collected the higher this number should. However for practical reasons it should usually not be larger than 5000 milliseconds
  * **write**: True
  * **type**: integer
  * **range**: 0..5000
  * **default**: 1000
  * **subscribable**: True
  * **dizmojs_version**
    * 0: 1.3
    * 1: 1.4
##### Title #####
The current title of the dizmo
  * **write**: True
  * **type**: string
  * **example**: Example dizmo
  * **subscribable**: True
  * **dizmojs_version**
    * 0: 1.3
    * 1: 1.4
##### Titlecolor #####
The webcolor of the title text  Up to API V1.1 and version 1.1 of dizmoViewer the order of the values was ARGB (#ffafc809 as a default)    <a href="http://test.dizmo.com/docs/topics/color">Details</a>
  * **write**: True
  * **type**: string
  * **range**: color
  * **default**: #000000ff
  * **subscribable**: True
  * **dizmojs_version**
    * 0: 1.3
    * 1: 1.4
##### Urltoopen #####
The current Url of the TinyBrowser.
  * **write**: True
  * **type**: string
  * **range**: URL
  * **default**:
  * **subscribable**: True
  * **dizmojs_version**
    * 0: 1.3
    * 1: 1.4
##### Usercontrols #####
This subtree of the «/dizmos/[dizmoID]/attributes/settings» node defines which parts of the user controls are available to the user. Most of them concern the context menu of the dizmo. Access these items using `dizmo.getAttribute("settings/userControls/[element]");`
###### Allowbackground ######
If this flag is set to true the user will be able to set an image as the background of the dizmo using the context menu of the dizmo.
  * **write**: True
  * **type**: boolean
  * **default**: True
  * **subscribable**: True
  * **dizmojs_version**
    * 0: 1.3
    * 1: 1.4
###### Allowcolor ######
If this flag is set to true the user will be able to change the background color of the dizmo using the context menu of the dizmo.
  * **write**: True
  * **type**: boolean
  * **default**: True
  * **subscribable**: True
  * **dizmojs_version**
    * 0: 1.3
    * 1: 1.4
###### Allowlock ######
If this flag is set to true the user will be able to lock and unlock a dizmo using the context menu of the dizmo.
  * **write**: True
  * **type**: boolean
  * **default**: True
  * **subscribable**: True
  * **dizmojs_version**
    * 0: 1.3
    * 1: 1.4
###### Allowopacity ######
If this flag is set to true the user will be able to change the opacity of the frame of the dizmo using its context menu
  * **write**: True
  * **type**: boolean
  * **default**: True
  * **subscribable**: True
  * **dizmojs_version**
    * 0: 1.3
    * 1: 1.4
###### Allowremove ######
If this flag is set to true the user will be able to remove this dizmo instance by using the context menu of the dizmo.
  * **write**: True
  * **type**: boolean
  * **default**: True
  * **subscribable**: True
  * **dizmojs_version**
    * 0: 1.3
    * 1: 1.4
###### Allowresize ######
If this flag is set to true the user will be able to change the size and side ration of the dizmo using the handle on the bottom right corner of the dizmo.
  * **write**: True
  * **type**: boolean
  * **default**: True
  * **subscribable**: True
  * **dizmojs_version**
    * 0: 1.3
    * 1: 1.4
###### Allowsticky ######
If this flag is set to true the user will be able to make a dizmo «sticky», i.e. making it hover over the other dizmos, using the context menu of the dizmo.
  * **write**: True
  * **type**: boolean
  * **default**: True
  * **subscribable**: True
  * **dizmojs_version**
    * 0: 1.3
    * 1: 1.4
###### Allowtitle ######
If this flag is set to true the user will be able to change the title of the dizmo using the context menu of the dizmo.
  * **write**: True
  * **type**: boolean
  * **default**: True
  * **subscribable**: True
  * **dizmojs_version**
    * 0: 1.3
    * 1: 1.4
###### Allowzoom ######
If this flag is set to true the user will be able to zoom the dizmo using the handle in the bottom left corner of the dizmo.
  * **write**: True
  * **type**: boolean
  * **default**: True
  * **subscribable**: True
  * **dizmojs_version**
    * 0: 1.3
    * 1: 1.4
#### State ####
This subtree of the «/dizmos/[dizmoID]/attributes» node provides information about the state of the dizmo and the way it is displayed depending on these settings. Access these items using `dizmo.getAttribute("state/[info]");`
##### Active #####
This flag is set to true by the dizmoViewer whenever the content of a dizmo is active, i.e. clickable. This goes along with showing the cogwheel of a dizmo in the top right corner.
  * **write**: False
  * **type**: boolean
  * **subscribable**: True
  * **dizmojs_version**
    * 0: 1.3
    * 1: 1.4
##### Closing #####
This attribute is set to true by dizmo space while a dizmo is «closing» i.e. as long as it is in the visual phase of fading out. If this is set to false during this phase, deletion will be stopped the same way this happens when a user clicks the dizmo while it is fading out.
  * **write**: False
  * **type**: boolean
  * **default**: False
  * **subscribable**: True
  * **dizmojs_version**
    * 0: 1.3
    * 1: 1.4
##### Dragging #####
This flag is set to true, while a dizmo is being dragged around by the user. So subscribing to it and interpreting the transition the dizmo can get notified when dragging starts or stops.
  * **write**: False
  * **type**: boolean
  * **default**: False
  * **subscribable**: True
  * **dizmojs_version**
    * 0: 1.3
    * 1: 1.4
##### Focused #####
This flag is set to true if the dizmo has the focus for user interaction events.
  * **write**: True
  * **type**: boolean
  * **default**: True
  * **subscribable**: True
  * **dizmojs_version**
    * 0: 1.3
    * 1: 1.4
##### Framehidden #####
True when the frame of the dizmo is hidden, i.e. all additional interaction elements like the header including settings, resize and zoom are not shown. In addition, unlike titleHidden, the bounding rectangle of the dizmo is reduced by the height of the title bar. So any touch just above the dizmo are passed to neighboring dizmo if there is one.
  * **write**: True
  * **type**: boolean
  * **default**: False
  * **subscribable**: True
  * **dizmojs_version**
    * 0: 1.3
    * 1: 1.4
##### Front #####
If this flag is set to true the dizmo will be shown with its front side. If necessary a transition animation will be shown when turning the dizmo around. This animation need to be init by the dizmo.js implementation.
  * **write**: True
  * **type**: boolean
  * **default**: True
  * **subscribable**: True
  * **dizmojs_version**
    * 0: 1.3
    * 1: 1.4
##### Frozen #####
True when the content of the dizmo is frozen, i.e. if the last bitmap rendered is displayed instead of updating the dizmos content continuously. When starting dizmoViewer this is set to true by default. However the dizmoElements library will set this to false before passing control to the dizmo.     <a  href="http://test.dizmo.com/docs/topics/frozen">Details</a>
  * **write**: True
  * **type**: boolean
  * **default**: False
  * **subscribable**: True
  * **dizmojs_version**
    * 0: 1.3
    * 1: 1.4
##### Hidden #####
If this flag is set to true the dizmo is hidden, i.e. it will not be visible to the user anymore. Nevertheless it will still exist and run. Please note that this is different from the «HiddenDizmo» property in Info.plist which defines whether or not the dizmo will be shown in the «Creator» dizmo.
  * **write**: True
  * **type**: boolean
  * **default**: False
  * **subscribable**: True
  * **dizmojs_version**
    * 0: 1.3
    * 1: 1.4
##### Iconized #####
If this flag is set to true the dizmo will be «iconized», i.e. instead of showing the entire dizmo, dizmoViewer will only draw its icon.
  * **write**: True
  * **type**: boolean
  * **default**: False
  * **subscribable**: True
  * **dizmojs_version**
    * 0: 1.3
    * 1: 1.4
##### Locked #####
If this flag is set to true the dizmo will be locked. This will make it impossible for the user to move, rotate, resize, remove or in any other way change the dizmo frame. However the content of the dizmo will still be available for interaction without limitation.
  * **write**: True
  * **type**: boolean
  * **default**: False
  * **subscribable**: True
  * **dizmojs_version**
    * 0: 1.3
    * 1: 1.4
##### Sticky #####
If this flag is set to true the dizmo will be made «sticky», i.e. make it hover over the other dizmos.
  * **write**: True
  * **type**: boolean
  * **default**: False
  * **subscribable**: True
  * **dizmojs_version**
    * 0: 1.3
    * 1: 1.4
##### Titlehidden #####
If this flag is set to true the titlebar of the dizmo will be made invisible while still allowing the user «grab» the area above the dizmo to drag it around.
  * **write**: True
  * **type**: boolean
  * **default**: False
  * **subscribable**: True
  * **dizmojs_version**
    * 0: 1.3
    * 1: 1.4
#### Stickygeometry ####
This subtree of the «/dizmos/[dizmoID]/attributes» node provides information about geometry of the dizmo when it is made sticky. This is rather different from the standard geometry as it is based on a different coordinate system. Access these items using `dizmo.getAttribute("stickyGeometry/[info]");`
##### Angle #####
The rotation at which the dizmo is displayed on the «sticky layer». A value of «0» means the dizmo is dawn upright
  * **write**: True
  * **type**: integer
  * **range**: 0..360
  * **subscribable**: True
  * **default**: 0
  * **dizmojs_version**
    * 0: 1.3
    * 1: 1.4
##### ~~Left~~ #####
~~When resizing the dizmoViewer window, a sticky dizmo remembers which border it's relative to: true if the sticky position of the dizmo is relative to left, otherwise to right.  When set to false, x needs to be negative.~~    ~~
  * **write**: False
  * **type**: boolean
  * **subscribable**: True
##### ~~Top~~ #####
~~When resizing the dizmoViewer window, a sticky dizmo remembers which border it's relative to: true if the sticky position of the dizmo is relative to top, otherwise bottom.  When set to false, y needx to be negative.~~    ~~
  * **write**: False
  * **type**: boolean
  * **subscribable**: True
##### X #####
The x position of the top left of the rectangle of the dizmo measured in pixels of the visible surface of dizmoViewer
  * **write**: True
  * **type**: integer
  * **range**: 0..viewerWidth
  * **subscribable**: True
  * **dizmojs_version**
    * 0: 1.3
    * 1: 1.4
##### Y #####
The y position of the top left of the rectangle of the dizmo measured in pixels of the visible surface of dizmoViewer
  * **write**: True
  * **type**: integer
  * **range**: 0..viewerHeight
  * **subscribable**: True
  * **dizmojs_version**
    * 0: 1.3
    * 1: 1.4
##### Zoom #####
The zoom factor used to render the dizmo on the «sticky layer». A value of 1 means the dizmo is drawn the way it has been described by the original HTML and CSS code
  * **write**: True
  * **type**: float
  * **range**: 0.1..10
  * **subscribable**: True
  * **dizmojs_version**
    * 0: 1.3
    * 1: 1.4
#### Storage ####
Informations about the storaged files
##### Size #####
Return the merged size of all storage files.
  * **write**: False
  * **type**: integer
  * **default**: 0
  * **subscribable**: False
  * **dizmojs_version**
    * 0: 1.4
### Public ###
Nodes stored in this part of the dizmo tree will be accessible from all other dizmos in the same dizmoViewer. Use `dizmo.publicStorage().getProperty("[anypath]")` to access such a node.    This is also where you should provide data for other dizmos that are docked or put onto to yours.
### Private ###
Nodes stored in this part of the dizmo tree will be accessible from the dizmo itself only. Use `dizmo.privateStorage().getProperty("[anypath]")` to access such a node.
# Bundles #
The subtree of the «/bundles» node provides access to the data about all the bundles installed in the dizmoViewer currently running. It does so by providing one node for every bundle using the bundleID as its name.

Each of these bundle nodes provides three subtrees providing attributes of a bundle as well as access to its public and private data. Data in the private subtree can only be accessed by dizmos that have been created using this bundle while data in the public subtree can be accessed by any dizmo that has access to that part of the data tree.

Access to a dizmos information is provided by the following access methods:
`bundle.getAttribute("<path>");`
`bundle.setAttribute("<path>");`
`bundle.privateStorage.getProperty("<path>"[{<options>}]);`
`bundle.privateStorage.setProperty("<path>"[{<options>}]);`
`bundle.publicStorage.getProperty("<path>"[{<options>}]);`
`bundle.publicStorage.setProperty("<path>"[{<options>}]);`

For more information have a look at the chapters about «Data Tree» and «Persistence» in the developers documentation.
## [Bundleid] ##
The name of this node is a bundleID (in reverse domain name notation) that is used to identify a particular bundle (the source items of a dizmo). In an actual environment expect there to be several of these nodes but all of them sharing the same structure as shown in here.
### Attributes ###
The subtree of the «/bundles/[bundleID]/attributes» node provides all kinds of information about the particular bundle used to instantiate dizmos of this particular kind. Access this information using `bundle.getAttribute("[info-path]");`
#### Secret ####
This data item is installed by the viewer when installing a bundle from dizmoStore where the data is stored as an encrypted secret. This data item can be used to safely store data a dizmo instance needs in order to access an external systems like an API key for example. When using this make sure that access to WebInspector is turned off to avoid access to the secret for unauthorized developers.
  * **write**: False
  * **type**: string
  * **example**: {"GoogleMapsAPIKey" : "#Af567S0k19sA55i", "FaceBookAPIKey":  "#Ezxkc,&D7qBm0k19" }
  * **subscribable**: False
  * **dizmojs_version**
    * 0: 1.4
#### Author ####
The name of the developer who developed this bundle.
  * **write**: False
  * **type**: string
  * **example**: John H. Doe
  * **subscribable**: False
  * **dizmojs_version**
    * 0: 1.3
    * 1: 1.4
#### Category ####
The category under which the developer of this bundle has published his work. This information is read from the `Category` parameter of the bundle's Info.plist file
  * **write**: False
  * **type**: string
  * **example**: tools
  * **subscribable**: False
  * **dizmojs_version**
    * 0: 1.3
    * 1: 1.4
#### Description ####
The description the developer of this bundle has provided with his work. This information is read from the `Description` parameter of the bundle's Info.plist file
  * **write**: False
  * **type**: string
  * **example**: An example dizmo proudly presented by John H. Doe
  * **subscribable**: False
  * **dizmojs_version**
    * 0: 1.3
    * 1: 1.4
#### Dizmoinstances ####
An array of the dizmoIDs of all dizmos instantiated based on this bundle
  * **write**: False
  * **type**: [string]
  * **example**
    * 0: h8bc3bff70b74d672524fa570f2fa2599
    * 1: h52413a56a4c5c72f4ad24528757f99b2
  * **subscribable**: True
  * **dizmojs_version**
    * 0: 1.3
    * 1: 1.4
#### Dizmojsversion ####
The version of the dizmoJS API library this bundle uses.  This information is read from the `ApiVersion` parameter of the bundle's Info.plist file
  * **write**: False
  * **type**: string
  * **example**: 1.2
  * **subscribable**: False
  * **dizmojs_version**
    * 0: 1.3
    * 1: 1.4
#### Elementsversion ####
The version of the dizmoElements library this bundle uses.  This information is read from the `ElementsVersion` parameter of the bundle's Info.plist file
  * **write**: False
  * **type**: string
  * **subscribable**: False
  * **default**: 1.0
  * **dizmojs_version**
    * 0: 1.3
    * 1: 1.4
#### Embeddedbundles ####
A list of bundle IDs that are embedded in this bundle too. These bundles are read from Info.plist and will be deinstalled too, if the bundle itself is deinstalled. Only embedded bundles with same domain will be deinstalled so make sure embedded bundles share the same domain in  the bundleID.
  * **write**: False
  * **type**: [string]
  * **example**
    * 0: com.example.embedded1
    * 1: com.example.embedded2
    * 2: com.example.embedded3
  * **subscribable**: True
  * **dizmojs_version**
    * 0: 1.3
    * 1: 1.4
#### Helperversion ####
The version of the dizmo helper library this bundle uses. This information is read from the HelperVersion parameter of the bundle's Info.plist file.
  * **write**: False
  * **type**: string
  * **example**: 1.0
  * **subscribable**: False
  * **dizmojs_version**
    * 0: 1.3
    * 1: 1.4
#### Height ####
The standard height of the rectangle of the dizmo in pixels
  * **write**: False
  * **type**: integer
  * **subscribable**: False
  * **dizmojs_version**
    * 0: 1.3
    * 1: 1.4
#### Hidden ####
This flag is true for dizmos that will never appear in the creator because they are instantiated by other interaction elements. The «About» and the «Creator» dizmos are some good examples of this type of dizmos
  * **write**: False
  * **type**: boolean
  * **subscribable**: False
  * **dizmojs_version**
    * 0: 1.3
    * 1: 1.4
#### Icondarkimage ####
The URI of the icon of this bundle to be used on a «dark» background.
  * **write**: False
  * **type**: string
  * **range**: URL
  * **example**: https://localhost:42613/bundles/com.dizmo.example/Icon-dark.svg
  * **subscribable**: False
  * **dizmojs_version**
    * 0: 1.3
    * 1: 1.4
#### Iconimage ####
The URI of the icon of this bundle
  * **write**: False
  * **type**: string
  * **range**: URL
  * **example**: https://localhost:42613/bundles/com.dizmo.example/Icon.svg
  * **subscribable**: False
  * **dizmojs_version**
    * 0: 1.3
    * 1: 1.4
#### Internal ####
This flag is true for dizmos are prebuilt into dizmoViewer and can therefore not be removed by the user. The «Pad» or the «Tiny Browser» dizmos are some good examples of this type of dizmos
  * **write**: False
  * **type**: boolean
  * **subscribable**: False
  * **dizmojs_version**
    * 0: 1.3
    * 1: 1.4
#### Languages ####
An array of ISO 639-1 codes listing the languages supported by this bundle
  * **write**: False
  * **type**: [string]
  * **example**
    * 0: en
    * 1: de
    * 2: fr
  * **subscribable**: False
  * **dizmojs_version**
    * 0: 1.3
    * 1: 1.4
#### Minspaceversion ####
The minimum version of dizmoViewer this bundle needs to successfully instantiate dizmos. The version must be composed of three integers separated by dots. This information is read from the `MinSpaceVersion` parameter of the bundle's Info.plist file
  * **write**: False
  * **type**: string
  * **example**: 1.2
  * **subscribable**: False
  * **dizmojs_version**
    * 0: 1.3
    * 1: 1.4
#### Name ####
The of a bundle shown in the Creator dizmo. This information is read from the `BundleName` parameter of the bundle's Info.plist file
  * **write**: False
  * **type**: string
  * **example**: Example
  * **subscribable**: False
  * **dizmojs_version**
    * 0: 1.3
    * 1: 1.4
#### Options ####
This subtree node provides collects all options that have been defined for the bundle by the developer.
##### Allowinspector #####
If this is set to false it is not possible to open WebInspector for dizmos instantiated from this bundle. This is should be used to avoid easy access to the internal code and data of a dizmo.
  * **write**: False
  * **type**: boolean
  * **subscribable**: False
  * **default**: True
  * **dizmojs_version**
    * 0: 1.3
    * 1: 1.4
#### Storeversionstring ####
The lasts version of this bundle on the shop server as a machine readable string composed of three integers separated by dots, the numbers indicate major version, minor version and update version. This information could be updated by the API call ViewerCore.updateStoreVersions()
  * **write**: False
  * **type**: string
  * **example**: 1.0.15
  * **subscribable**: False
  * **dizmojs_version**
    * 0: 1.3
    * 1: 1.4
#### Tags ####
An array tags that have been associated by the developer with this bundle
  * **write**: False
  * **type**: [string]
  * **example**
    * 0: chess
    * 1: 2player
    * 2: easy
  * **subscribable**: False
  * **dizmojs_version**
    * 0: 1.3
    * 1: 1.4
#### Title ####
The default title displayed for a dizmo instantiated from this bundle. This information is read from the `BundleDisplayName` parameter of the bundle's Info.plist file
  * **write**: False
  * **type**: string
  * **example**: One Example
  * **subscribable**: True
  * **dizmojs_version**
    * 0: 1.3
    * 1: 1.4
#### Version ####
A string indicating the version / build for this bundle which is meant to be human readable. This information is read from the `BundleVersion` parameter of the bundle's Info.plist file
  * **write**: False
  * **type**: string
  * **example**: 1.0b2 Build 344
  * **subscribable**: False
  * **dizmojs_version**
    * 0: 1.3
    * 1: 1.4
#### Versionstring ####
The version of the instance of this bundle as a machine readable string composed of three integers separated by dots, the numbers indicate major version, minor version and update version.  This information is read from the `BundleShortVersionString` parameter of the bundle's Info.plist file
  * **write**: False
  * **type**: string
  * **example**: 1.0.15
  * **subscribable**: False
  * **dizmojs_version**
    * 0: 1.3
    * 1: 1.4
#### Width ####
The standard width of the rectangle of the dizmo in pixels
  * **write**: False
  * **type**: integer
  * **subscribable**: False
  * **dizmojs_version**
    * 0: 1.3
    * 1: 1.4
### Public ###
Nodes stored in this part of the dizmo tree will be accessible from all other dizmos in the same dizmoViewer. Use `bundle.publicStorage().getProperty("[anypath]")` to access such a node.
### Private ###
Nodes stored in this part of the dizmo tree will be accessible only from all the dizmos that have been instantiated using the bundle this subtree belongs to. Use `bundle.privateStorage().getProperty("[anypath]")` to access such a node.
# Remotehosts #
Subtree to get data about available live hosts and connections
## [Remotehostid] ##
A unique identifier like the IP address, the reverse lookup name or the host name of another dizmoViewer instance that is connected or can be connected to the local dizmoViewer instance. Don't make any assumptions about the format of this Id as it might change in the future.
  * **write**: False
  * **type**: String
  * **example**: dev001.example.com-1
  * **subscribable**: False
### Attributes ###
#### Confirmed ####
This item is set to true if the user has confirmed that the host is a valid dizmoLive destination or if the connection details are coming from a trusted source.
  * **write**: False
  * **type**: Boolean
  * **subscribable**: True
  * **dizmojs_version**
    * 0: 1.3
    * 1: 1.4
#### Connectionstate ####
This item provides the state of the connection. The states provided should be self explaining.
  * **write**: False
  * **type**: String
  * **range**
    * 0: closed
    * 1: connecting
    * 2: open
    * 3: closing
  * **example**: connecting
  * **subscribable**: True
  * **dizmojs_version**
    * 0: 1.3
    * 1: 1.4
#### Dizmos ####
An array of dizmoIDs of the dizmos currently transmitting from and to the other dizmoViewer if there is currently is an open connection.
  * **write**: False
  * **type**: [String]
  * **range**: hexstring
  * **example**
    * 0: h3753bff70b74d672524fa570f2fa2567
    * 1: hd4413a56a4c5c72f4ad24528757f9850
  * **prev-path**: /viewer/openLiveConnections/dizmos
  * **subscribable**: True
  * **dizmojs_version**
    * 0: 1.3
    * 1: 1.4
#### Hostname ####
The host name of the other dizmoViewer. This string is usually grabbed from the operating system.
  * **write**: False
  * **type**: String
  * **example**: local.otherComputer
  * **prev-path**: /viewer/openLiveConnections/hostName
  * **subscribable**: True
  * **dizmojs_version**
    * 0: 1.3
    * 1: 1.4
#### Ipv4Address ####
The IPv4 address of the device on which the remote instance of dizmoViewer is running in Dot-decimal notation.
  * **write**: False
  * **type**: [string]
  * **example**
    * 0: 192.168.0.3
    * 1: 192.168.57.1
  * **subscribable**: False
  * **dizmojs_version**
    * 0: 1.3
    * 1: 1.4
#### Ipv4Livehub ####
This field provides the IPv4 address of the hub / reflector that is or has to be used to connect to the remote host. If the remote dizmoViewer instance is available using a direct LAN connection this is set to "127.0.0.1" (localhost).
  * **write**: False
  * **type**: [string]
  * **example**
    * 0: 127.0.0.1
    * 1: 198.51.100.1
  * **subscribable**: False
  * **dizmojs_version**
    * 0: 1.3
    * 1: 1.4
#### Ipv6Address ####
The IPv6 address of the device on which the remote instance of dizmoViewer is running in Colon-hex notation.
  * **write**: False
  * **type**: [string]
  * **example**
    * 0: 2001:0db8:85a3:08d3:1319:8a2e:0370:1234/64
    * 1: 2001:0db8:85a3:08d3:1319:8a2e:0370:5342/64
  * **subscribable**: False
  * **dizmojs_version**
    * 0: 1.3
    * 1: 1.4
#### Ipv6Livehub ####
This field provides the IPv6 address of the dizmoLive hub / reflector that is or has to be used to connect to the remote host. If the remote dizmoViewer instance is available using a direct LAN connection this is set to "::1" (localhost).
  * **write**: False
  * **type**: [string]
  * **example**
    * 0: ::1
    * 1: 2001:0db8:85a3:08d3:1319:8a2e:0370:7347/64
  * **subscribable**: False
  * **dizmojs_version**
    * 0: 1.3
    * 1: 1.4
#### Source ####
This item indicates the source of the remote host.
  * **write**: False
  * **type**: string
  * **range**
    * 0: ssdp
    * 1: dizmo
  * **subscribable**: False
  * **dizmojs_version**
    * 0: 1.3
    * 1: 1.4
#### Time ####
The time of the latest connection status change.
  * **write**: False
  * **type**: integer
  * **example**: 1234567890
  * **prev-path**: /viewer/openLiveConnections/time
  * **subscribable**: True
  * **dizmojs_version**
    * 0: 1.3
    * 1: 1.4
#### Username ####
Name of the user that has signed in on the remote dizmoViewer.
  * **write**: False
  * **type**: String
  * **example**: kkratzenstein
  * **prev-path**: /viewer/openLiveConnections/userName
  * **subscribable**: True
  * **dizmojs_version**
    * 0: 1.3
    * 1: 1.4
