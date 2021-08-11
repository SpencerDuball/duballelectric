import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { FindUsOnFacebook, FindUsOnFacebookPropsI } from "lib/svg/duball";

export default {
  title: "lib/svg/duball/FindUsOnFacebook",
  component: FindUsOnFacebook,
} as ComponentMeta<typeof FindUsOnFacebook>;

const Template: ComponentStory<typeof FindUsOnFacebook> = (
  args: FindUsOnFacebookPropsI
) => (
  <Box display="flex" gridColumnGap="20px">
    <FindUsOnFacebook {...args} />
    <FindUsOnFacebook {...args} fill="red.500" />
    <FindUsOnFacebook {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "200px", fill: "gray.200" };
