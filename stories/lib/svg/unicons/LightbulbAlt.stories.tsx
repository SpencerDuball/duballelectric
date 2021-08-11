import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { LightbulbAlt, LightbulbAltPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/LightbulbAlt",
  component: LightbulbAlt,
} as ComponentMeta<typeof LightbulbAlt>;

const Template: ComponentStory<typeof LightbulbAlt> = (
  args: LightbulbAltPropsI
) => (
  <Box display="flex" gridColumnGap="20px">
    <LightbulbAlt {...args} />
    <LightbulbAlt {...args} fill="red.500" />
    <LightbulbAlt {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
