import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { MobileAndroidAlt, MobileAndroidAltPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/MobileAndroidAlt",
  component: MobileAndroidAlt,
} as ComponentMeta<typeof MobileAndroidAlt>;

const Template: ComponentStory<typeof MobileAndroidAlt> = (
  args: MobileAndroidAltPropsI
) => (
  <Box display="flex" gridColumnGap="20px">
    <MobileAndroidAlt {...args} />
    <MobileAndroidAlt {...args} fill="red.500" />
    <MobileAndroidAlt {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
