import "./icons.css"
import * as icons from "components"
import {
  purposeText,
  colorText,
  sizingText,
  withTextText,
  iconLibraryText,
  iconsAndNames,
  iconsGroupsAndNames,
  getCaptionColorClass,
  getIconColorClass,
  getTextColorClass,
} from "./util"

// TODO: FILE IS TOO VERBOSE, NEEDS TO BE REFACTORED SO WE HAVE LESS TECHNICAL DEBT (EASIER TO MAINTAIN)

function Header() {
  return (
    <div className="h-[49px] bg-grey-800 -mx-[25px] -mt-[16px] items-center flex flex-row">
      <div className="mx-[8px] mt-[5.5px] mb-[9.5px]">
        <icons.AdaptiveLogo />
      </div>
      <div className="mt-[18.5px] mb-[18.5px]">
        <p className="title text-white">Icons</p>
      </div>
    </div>
  )
}

function Purpose({
  title,
  description,
}: {
  title: string
  description: string[]
}) {
  return (
    <div>
      <div className="icons-purpose-title">
        <p className={getTextColorClass() + " title"}>{title}</p>
      </div>
      <div className="icons-purpose-body">
        <p className={getTextColorClass() + " body mb-[16px]"}>
          {description[0]}
        </p>
        <p className={getTextColorClass() + " body font-bold"}>
          {description[1]}
        </p>
        <div className="ml-[20px]">
          <ul className={`list-disc ${getTextColorClass()} body`}>
            <li>{description[2]}</li>
            <li>{description[3]}</li>
            <li>{description[4]}</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

// TODO: THIS CAN BE REFACTORED
function Color({
  title,
  description,
}: {
  title: string
  description: string[]
}) {
  const firstDescriptionSectioned: string[] = description[0].split("-")
  return (
    <div className="color-section">
      <div className="section-description-container">
        <p className={getTextColorClass() + " title"}>{title}</p>
        <p className={getTextColorClass() + " body mt-[12px]"}>
          <a>{firstDescriptionSectioned[0]}</a>
          <a className="font-bold">{firstDescriptionSectioned[1]}</a>
        </p>
        <p className={getTextColorClass() + " body mt-[12px] italic"}>
          {description[1]}
        </p>
      </div>
      <div className="color-examples">
        {/* BLACK THEME */}
        <div>
          <div className="color-example-box bg-grey-900">
            {/* DEFAULT */}
            <div className="color-icon-theming">
              <div className="icon-color-property">
                <div className="color-cog-icon-box">
                  <icons.Cog color="fill-grey-300" height={12} width={12} />
                </div>
                <p className="caption text-paper-white">Default</p>
              </div>
              {/* HOVER */}
              <div className="icon-color-property">
                <div className="color-cog-icon-box">
                  <icons.Cog
                    color="fill-primary-light"
                    height={12}
                    width={12}
                  />
                </div>
                <p className="caption text-paper-white">Hover</p>
              </div>
              {/* ACTIVE (PRESSED) */}
              <div className="icon-color-property">
                <div className="color-cog-icon-box">
                  <icons.Cog color="fill-primary-main" height={12} width={12} />
                </div>
                <p className="caption text-paper-white">Active</p>
                <p className="caption text-paper-white">{"(pressed)"}</p>
              </div>
              {/* DISABLED */}
              <div className="icon-color-property">
                <div className="color-cog-icon-box">
                  <icons.Cog
                    color="fill-opacity-white-38"
                    height={12}
                    width={12}
                  />
                </div>
                <p className="caption text-paper-white">Disabled</p>
              </div>
            </div>
          </div>
          {/* DESCRIPTION */}
          <div className="color-example-description">
            <p className={getCaptionColorClass() + " caption"}>
              {description[2]}
            </p>
          </div>
        </div>
        {/* WHITE THEME */}
        <div className="ml-[24px]">
          <div className="color-example-box bg-paper-white">
            <div className="color-icon-theming">
              <div className="icon-color-property">
                <div className="color-cog-icon-box">
                  <icons.Cog color="fill-grey-600" height={12} width={12} />
                </div>
                <p className="caption text-grey-900">Default</p>
              </div>
              {/* HOVER */}
              <div className="icon-color-property">
                <div className="color-cog-icon-box">
                  <icons.Cog color="fill-primary-dark" height={12} width={12} />
                </div>
                <p className="caption text-grey-900">Hover</p>
              </div>
              {/* ACTIVE (PRESSED) */}
              <div className="icon-color-property">
                <div className="color-cog-icon-box">
                  <icons.Cog color="fill-primary-main" height={12} width={12} />
                </div>
                <p className="caption text-grey-900">Active</p>
                <p className="caption text-grey-900">{"(pressed)"}</p>
              </div>
              {/* DISABLED */}
              <div className="icon-color-property">
                <div className="color-cog-icon-box">
                  <icons.Cog
                    color="fill-opacity-black-38"
                    height={12}
                    width={12}
                  />
                </div>
                <p className="caption text-grey-900">Disabled</p>
              </div>
            </div>
          </div>
          {/* DESCRIPTION */}
          <div className="color-example-description">
            <p className={getCaptionColorClass() + " caption"}>
              {description[3]}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

// TODO: THIS CAN BE REFACTORED
function Sizing({
  title,
  description,
}: {
  title: string
  description: string[]
}) {
  const secondDescriptionSectioned: string[] = description[1].split("-")
  return (
    <div className="sizing-section">
      {/* SIZING - EXPLANATION */}
      <div className="section-description-container">
        <p className={getTextColorClass() + " title"}>{title}</p>
        <p className={getTextColorClass() + " body mt-[12px]"}>
          {description[0]}
        </p>
        <p className={getTextColorClass() + " body mt-[12px]"}>
          <a>{secondDescriptionSectioned[0]}</a>
          <a className="font-bold">{secondDescriptionSectioned[1]}</a>
        </p>
        <p className={getTextColorClass() + " body mt-[12px] italic"}>
          {description[2]}
        </p>
      </div>
      <div className="sizing-examples-container">
        <div className="sizing-examples">
          <div className="good-sizing">
            {/* S */}
            <div className="icon-size-example">
              <div className="sizing-alarm-bell-icon-box h-[12px] w-[12px]">
                <icons.AlarmBell
                  color={getIconColorClass()}
                  height={9}
                  width={9}
                />
              </div>
              <p className={getTextColorClass() + " caption"}>S</p>
            </div>
            {/* M */}
            <div className="icon-size-example">
              <div className="sizing-alarm-bell-icon-box h-[16px] w-[16px]">
                <icons.AlarmBell
                  color={getIconColorClass()}
                  height={12}
                  width={12}
                />
              </div>
              <p className={getTextColorClass() + " caption"}>M</p>
            </div>
            {/* L */}
            <div className="icon-size-example">
              <div className="sizing-alarm-bell-icon-box h-[24px] w-[24px]">
                <icons.AlarmBell
                  color={getIconColorClass()}
                  height={18}
                  width={18}
                />
              </div>
              <p className={getTextColorClass() + " caption"}>L</p>
            </div>
            {/* XL */}
            <div className="icon-size-example">
              <div className="sizing-alarm-bell-icon-box h-[32px] w-[32px]">
                <icons.AlarmBell
                  color={getIconColorClass()}
                  height={24}
                  width={24}
                />
              </div>
              <p className={getTextColorClass() + " caption"}>XL</p>
            </div>
          </div>
          <div className="bad-sizing">
            {/* TOO SMALL! */}
            <div className="icon-size-example">
              <div className="sizing-alarm-bell-icon-box h-[8px] w-[8px]">
                <icons.AlarmBell color="fill-error-main" height={6} width={6} />
              </div>
              <p className="text-error-main caption">{"Too small!"}</p>
            </div>
            {/* TOO BIG! */}
            <div className="icon-size-example">
              <div className="sizing-alarm-bell-icon-box h-[48px] w-[48px]">
                <icons.AlarmBell
                  color="fill-error-main"
                  height={36}
                  width={36}
                />
              </div>
              <p className="text-error-main caption">{"Too big!"}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function WithText({
  title,
  description,
  doIconsLabelsSizing,
  dontIconsLabelsSizing,
  doAddIcon,
  dontAddIcon,
}: {
  title: string
  description: string[]
  doIconsLabelsSizing: string
  dontIconsLabelsSizing: string[]
  doAddIcon: string
  dontAddIcon: string
}) {
  const sixthDescriptionSectioned: string[] = description[5].split("-")
  return (
    <div className="with-text-section">
      {/* WITH TEXT - EXPLANATION */}
      <div className="section-description-container">
        <p className={getTextColorClass() + " title"}>{title}</p>
        <p className={getTextColorClass() + " body mt-[12px]"}>
          {description[0]}
        </p>
        <p className={getTextColorClass() + " body mt-[12px]"}>
          {description[1]}
        </p>
        <div className="ml-[20px] mt-[12px]">
          <ul className={`list-disc ${getTextColorClass()} body`}>
            <li>{description[2]}</li>
            <li>{description[3]}</li>
            <li>{description[4]}</li>
            <li>
              <a>{sixthDescriptionSectioned[0]}</a>
              <p className="font-italic">
                <a>{sixthDescriptionSectioned[1]}</a>
                <a className="font-bold">{sixthDescriptionSectioned[2]}</a>
                <a className="">{sixthDescriptionSectioned[3]}</a>
              </p>
            </li>
          </ul>
        </div>
      </div>
      <div className="with-text-examples">
        {/* DO: ICONS AND LABELS SIZING */}
        <div className="do-icons-labels-sizing">
          <div className="do-dont-title-box">
            <p className="do-dont-text text-success-main">{"Do:"}</p>
          </div>
          <div className="h-[81px] w-[172px]">
            {/* COG 12x12 */}
            <div className="icon-example">
              <div className="h-[12px] w-[12px] cog-icon-box">
                <icons.Cog color={getIconColorClass()} height={9} width={9} />
              </div>
              <p className={getTextColorClass() + " body"}>Settings</p>
            </div>
            {/* COG 16x16 */}
            <div className="icon-example mt-[10px]">
              <div className="h-[16px] w-[16px] cog-icon-box">
                <icons.Cog color={getIconColorClass()} height={12} width={12} />
              </div>
              <p className={getTextColorClass() + " subheader-large"}>
                Settings
              </p>
            </div>
            {/* COG 24x24 */}
            <div className="icon-example mt-[10px]">
              <div className="h-[24px] w-[24px] cog-icon-box">
                <icons.Cog color={getIconColorClass()} height={18} width={18} />
              </div>
              <p className={getTextColorClass() + " header-large"}>Settings</p>
            </div>
          </div>
          <div className="w-[172px] mt-[10px]">
            <p className={getCaptionColorClass() + " caption"}>
              {doIconsLabelsSizing}
            </p>
          </div>
        </div>
        {/* DON'T: ICONS AND LABELS SIZING */}
        <div className="dont-icons-labels-sizing ml-[48px]">
          <div className="do-dont-title-box">
            <p className="do-dont-text text-error-main">{"Don't:"}</p>
          </div>
          <div className="w-[188px]">
            {/* SMALL ICON - BIG TEXT */}
            <div className="icon-example">
              <div className="h-[12px] w-[12px] cog-icon-box">
                <icons.Cog color={getIconColorClass()} height={9} width={9} />
              </div>
              <p className={getTextColorClass() + " header-large"}>Settings</p>
            </div>
            {/* ICON TEXT EXAMPLE CAPTION */}
            <div className="mt-[4px]">
              <p className={getCaptionColorClass() + " caption"}>
                {dontIconsLabelsSizing[0]}
              </p>
            </div>
            {/* BIG ICON - SMALL TEXT */}
            <div className="icon-example mt-[8px]">
              <div className="h-[24px] w-[24px] cog-icon-box">
                <icons.Cog color={getIconColorClass()} height={18} width={18} />
              </div>
              <p className={getTextColorClass() + " body"}>Settings</p>
            </div>
            {/* ICON TEXT EXAMPLE CAPTION */}
            <div className="mt-[4px]">
              <p className={getCaptionColorClass() + " caption"}>
                {dontIconsLabelsSizing[1]}
              </p>
            </div>
            {/* ICON WITH TOP ALIGNMENT */}
            <div className="flex flex-row mt-[8px]">
              <div className="h-[12px] w-[12px] cog-icon-box">
                <icons.Cog color={getIconColorClass()} height={9} width={9} />
              </div>
              <p className={getTextColorClass() + " header-large"}>Settings</p>
            </div>
            {/* ICON TEXT EXAMPLE CAPTION */}
            <div className="mt-[4px]">
              <p className={getCaptionColorClass() + " caption"}>
                {dontIconsLabelsSizing[2]}
              </p>
            </div>
            {/* ICON AND TEXT WITH DIFFERENT COLORS */}
            <div className="icon-example mt-[8px]">
              <div className="h-[12px] w-[12px] cog-icon-box">
                <icons.Cog color={getIconColorClass()} height={9} width={9} />
              </div>
              <p className={getTextColorClass() + " body text-error-light"}>
                Settings
              </p>
            </div>
            {/* ICON TEXT EXAMPLE CAPTION */}
            <div className="mt-[4px]">
              <p className={getCaptionColorClass() + " caption"}>
                {dontIconsLabelsSizing[3]}
              </p>
            </div>
            {/* ICON WITH DIFFERENT LABEL */}
            <div className="icon-example mt-[8px]">
              <div className="h-[12px] w-[12px] cog-icon-box">
                <icons.Cog color={getIconColorClass()} height={9} width={9} />
              </div>
              <p className={getTextColorClass() + " body"}>Configure</p>
            </div>
            {/* ICON TEXT EXAMPLE CAPTION */}
            <div className="mt-[4px]">
              <p className={getCaptionColorClass() + " caption"}>
                {dontIconsLabelsSizing[4]}
              </p>
            </div>
          </div>
        </div>
        {/* DO: ADD ICONS */}
        <div className="do-add-icon ml-[12px]">
          <div className="do-dont-title-box">
            <p className="do-dont-text text-success-main">{"Do:"}</p>
          </div>
          <div className="do-dont-add-icon-box flex flex-col">
            {/* EDIT */}
            <div className="icon-example">
              <div className="icon-box mx-[8px]"></div>
              <p className="body text-common-black">Edit</p>
            </div>
            {/* SETTINGS */}
            <div className="icon-example">
              <div className="icon-box mx-[8px]"></div>
              <p className="body text-common-black">Settings</p>
            </div>
            {/* CLOSE */}
            <div className="icon-example">
              <div className="icon-box mx-[8px]"></div>
              <p className="body text-common-black">Close</p>
            </div>
            {/* Add new */}
            <div className="icon-example mr-[10px]">
              <div className="icon-box mx-[8px]">
                <icons.Plus color="fill-grey-600" />
              </div>
              <p className="body text-common-black">Add new</p>
            </div>
          </div>
          {/* ICON TEXT EXAMPLE CAPTION */}
          <div className="w-[174px] mt-[8px]">
            <p className={getCaptionColorClass() + " caption"}>{doAddIcon}</p>
          </div>
        </div>
        {/* DON'T: ADD ICONS */}
        <div className="dont-add-icon ml-[22px]">
          <div className="do-dont-title-box">
            <p className="do-dont-text text-error-main">{"Don't:"}</p>
          </div>
          <div className="do-dont-add-icon-box flex flex-col">
            {/* EDIT */}
            <div className="icon-example">
              <div className="icon-box mx-[8px]">
                <icons.Edit color="fill-grey-600" />
              </div>
              <p className="body text-common-black">Edit</p>
            </div>
            {/* SETTINGS */}
            <div className="icon-example">
              <div className="icon-box mx-[8px]">
                <icons.Settings color="fill-grey-600" />
              </div>
              <p className="body text-common-black">Settings</p>
            </div>
            {/* CLOSE */}
            <div className="icon-example">
              <div className="icon-box mx-[8px]">
                <icons.Close color="fill-grey-600" />
              </div>
              <p className="body text-common-black">Close</p>
            </div>
            {/* Add new */}
            <div className="icon-example mr-[10px]">
              <div className="icon-box mx-[8px]">
                <icons.Plus color="fill-grey-600" />
              </div>
              <p className="body text-common-black">Add new</p>
            </div>
          </div>
          {/* ICON TEXT EXAMPLE CAPTION */}
          <div className="w-[172px] mt-[8px]">
            <p className={getCaptionColorClass() + " caption"}>{dontAddIcon}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

function IconLibrary({
  title,
  description,
}: {
  title: string
  description: string
}) {
  const iconsAndNamesColumns = [
    iconsAndNames.splice(0, 10),
    iconsAndNames.splice(0, 10),
    iconsAndNames.splice(0, 10),
  ]
  return (
    <div className="icon-library-section">
      {/* ICON LIBRARY - EXPLANATION */}
      <div className="section-description-container">
        <p className={getTextColorClass() + " title"}>{title}</p>
        <p className={getTextColorClass() + " body mt-[12px]"}>{description}</p>
      </div>
      <div className="icon-library-examples">
        {/* FIRST - THIRD COLUMN */}
        {iconsAndNamesColumns.map(
          (iconsAndNamesColumn, iconsAndNamesColumnIndex) => {
            return (
              <div
                className={
                  iconsAndNamesColumnIndex === 0
                    ? "icon-column"
                    : "icon-column ml-[30px]"
                }
                key={"iconsAndNamesColumn-" + iconsAndNamesColumnIndex}
              >
                {iconsAndNamesColumn.map((iconAndName, iconAndNameIndex) => {
                  return (
                    <div
                      className={
                        iconAndNameIndex === 0
                          ? "icon-example"
                          : "icon-example mt-[12px]"
                      }
                      key={"iconAndName-" + iconAndNameIndex}
                    >
                      <div className="icon-box">
                        <iconAndName.iconElement color={getIconColorClass()} />
                      </div>
                      <p className={getTextColorClass() + " body"}>
                        {iconAndName.iconName}
                      </p>
                    </div>
                  )
                })}
              </div>
            )
          },
        )}
        {/* FOURTH COLUMN */}
        <div className="icon-column ml-[30px]">
          {iconsGroupsAndNames.map(
            (iconsGroupAndName, iconsGroupAndNameIndex) => {
              const iconsNumber = iconsGroupAndName.iconsElements.length
              return (
                <div
                  className={
                    iconsGroupAndNameIndex === 0
                      ? "icon-example"
                      : "icon-example mt-[12px]"
                  }
                  key={"iconsGroupAndName-" + iconsGroupAndNameIndex}
                >
                  {iconsGroupAndName.iconsElements.map(
                    (IconElement, iconElementIndex) => {
                      return (
                        <div
                          className="icon-box"
                          key={"iconElement-" + iconElementIndex}
                        >
                          <IconElement color={getIconColorClass()} />
                        </div>
                      )
                    },
                  )}
                  {iconsNumber === 3 ? <div className="icon-box"></div> : ""}
                  <p className={getTextColorClass() + " body"}>
                    {iconsGroupAndName.iconsName}
                  </p>
                </div>
              )
            },
          )}
        </div>
      </div>
    </div>
  )
}

function Icons() {
  return (
    <div className="ml-[8px]">
      <Header />
      <Purpose
        title={purposeText.title}
        description={purposeText.description}
      />
      <Color title={colorText.title} description={colorText.description} />
      <Sizing title={sizingText.title} description={sizingText.description} />
      <WithText
        title={withTextText.title}
        description={withTextText.description}
        doIconsLabelsSizing={withTextText.doIconsLabelsSizing}
        dontIconsLabelsSizing={withTextText.dontIconsLabelsSizing}
        doAddIcon={withTextText.doAddIcon}
        dontAddIcon={withTextText.dontAddIcon}
      />
      <IconLibrary
        title={iconLibraryText.title}
        description={iconLibraryText.description}
      />
    </div>
  )
}

export default Icons
