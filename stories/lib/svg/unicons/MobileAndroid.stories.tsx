import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { MobileAndroid, MobileAndroidPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/MobileAndroid",
  component: MobileAndroid,
} as ComponentMeta<typeof MobileAndroid>;

const Template: ComponentStory<typeof MobileAndroid> = (
  args: MobileAndroidPropsI
) => (
  <Box display="flex" gridColumnGap="20px">
    <MobileAndroid {...args} />
    <MobileAndroid {...args} fill="red.500" />
    <MobileAndroid {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
