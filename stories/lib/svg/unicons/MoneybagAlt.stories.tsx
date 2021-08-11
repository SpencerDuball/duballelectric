import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { MoneybagAlt, MoneybagAltPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/MoneybagAlt",
  component: MoneybagAlt,
} as ComponentMeta<typeof MoneybagAlt>;

const Template: ComponentStory<typeof MoneybagAlt> = (
  args: MoneybagAltPropsI
) => (
  <Box display="flex" gap="20px">
    <MoneybagAlt {...args} />
    <MoneybagAlt {...args} fill="red.500" />
    <MoneybagAlt {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
