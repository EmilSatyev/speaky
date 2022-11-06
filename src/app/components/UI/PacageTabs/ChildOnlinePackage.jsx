import * as React from "react";
import TabsUnstyled from "@mui/base/TabsUnstyled";
import TabsListUnstyled from "@mui/base/TabsListUnstyled";
import TabPanelUnstyled from "@mui/base/TabPanelUnstyled";
import TabUnstyled from "@mui/base/TabUnstyled";
import { Box } from "@mui/material";

import "./PackageTabs.scss";
import TimeTabs from "./TimeTabs";
import TabContent from "../TabContent/TabContent";


export default function ChildOnlinePackage() {
  return (
    <TabsUnstyled className="packageTabs" defaultValue={0}>
      <Box>
        <TabsListUnstyled>
          <TabUnstyled>Индивидуальные уроки</TabUnstyled>
          <TabUnstyled>Разговорный клуб</TabUnstyled>
        </TabsListUnstyled>
      </Box>
      <TabPanelUnstyled value={0}>
        <TimeTabs />
      </TabPanelUnstyled>
      <TabPanelUnstyled value={1}>
        <TabContent name="club" />
      </TabPanelUnstyled>
    </TabsUnstyled>
  );
}

