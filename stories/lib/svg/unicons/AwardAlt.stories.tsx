import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { AwardAlt, AwardAltPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/AwardAlt",
  component: AwardAlt,
} as ComponentMeta<typeof AwardAlt>;

const Template: ComponentStory<typeof AwardAlt> = (args: AwardAltPropsI) => (
  <x.div display="flex" gap="20px">
    <AwardAlt {...args} />
    <AwardAlt {...args} fill="red.500" />
    <AwardAlt {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
