import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { SnapchatAlt, SnapchatAltPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/SnapchatAlt",
  component: SnapchatAlt,
} as ComponentMeta<typeof SnapchatAlt>;

const Template: ComponentStory<typeof SnapchatAlt> = (
  args: SnapchatAltPropsI
) => (
  <x.div display="flex" gap="20px">
    <SnapchatAlt {...args} />
    <SnapchatAlt {...args} fill="red.500" />
    <SnapchatAlt {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
