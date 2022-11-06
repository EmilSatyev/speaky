import * as React from "react";
import TabsUnstyled from "@mui/base/TabsUnstyled";
import TabsListUnstyled from "@mui/base/TabsListUnstyled";
import TabPanelUnstyled from "@mui/base/TabPanelUnstyled";
import TabUnstyled from "@mui/base/TabUnstyled";
import { Box } from "@mui/material";
import TabContent from "../TabContent/TabContent";

export default function TimeTabs() {
  return (
    <TabsUnstyled defaultValue={0}>
      <Box>
        <TabsListUnstyled>
          <TabUnstyled>30 минут</TabUnstyled>
          <TabUnstyled>60 минут</TabUnstyled>
        </TabsListUnstyled>
      </Box>
      <TabPanelUnstyled value={0}>
        <TabContent name="individual30" />
      </TabPanelUnstyled>

      <TabPanelUnstyled value={1}>
        <TabContent name="individual60" />
      </TabPanelUnstyled>
    </TabsUnstyled>
  );
}
