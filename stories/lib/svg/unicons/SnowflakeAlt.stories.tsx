import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { SnowflakeAlt, SnowflakeAltPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/SnowflakeAlt",
  component: SnowflakeAlt,
} as ComponentMeta<typeof SnowflakeAlt>;

const Template: ComponentStory<typeof SnowflakeAlt> = (
  args: SnowflakeAltPropsI
) => (
  <x.div display="flex" gap="20px">
    <SnowflakeAlt {...args} />
    <SnowflakeAlt {...args} fill="red.500" />
    <SnowflakeAlt {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
